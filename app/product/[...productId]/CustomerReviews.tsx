import commentApi from '@/api/comment-api';
import productApi from '@/api/product-api';
import ReviewStars from '@/components/ReviewStars';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Comments from './Comments';

type CustomerReviewsProps = {
    productId: string;
};

const CustomerReviews = async ({ productId }: CustomerReviewsProps) => {
    const commentResPromise: Promise<CommentResponse> =
        commentApi.getCommentsByProductId(productId);
    const productPromise: Promise<Product> = productApi.getProductById(productId);

    const [commentRes, product] = await Promise.all([commentResPromise, productPromise]);
    const numComments = commentRes.comments.length;
    return (
        <div>
            <nav className="flex gap-[80px] font-medium text-lg text-neutral-400 border-b border-neutral-200">
                <Link href="#">Additional Info</Link>
                <Link href="#">Questions</Link>
                <Link href="#" className="text-neutral-800 border-b-2 border-neutral-800">
                    Reviews
                </Link>
            </nav>
            <div className="mt-12 flex flex-col gap-2 w-max">
                <h3 className="font-medium text-xl">Customer Reviews</h3>

                <div className="flex gap-2 items-center">
                    <ReviewStars rating={product.rating} />
                    <span className="text-xs font-normal">{numComments} Reviews</span>
                </div>
                <span className="text-right text-base font-semibold">{product.title}</span>
            </div>
            <div className="flex p-2 rounded-[16px] border mt-[30px] mb-10">
                <input
                    type="text"
                    className="grow outline-none border-none focus:outline-none focus:border-none"
                />
                <Button className="rounded-full px-10 py-2">Write Review</Button>
            </div>
            <Comments comments={commentRes.comments} />
        </div>
    );
};
export default CustomerReviews;
