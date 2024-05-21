import Image from 'next/image';
import ReviewStars from './ReviewStars';
import Link from 'next/link';
import { Button } from './ui/button';

type ProductColumnCardProps = {
    product: Product;
};

const ProductColumnCard = ({ product }: ProductColumnCardProps) => {
    let currentPrice = product.price;
    const hasDiscount = product.discountPercentage > 0;

    if (hasDiscount) {
        currentPrice = product.price - (product.price * product.discountPercentage) / 100;

        currentPrice = +currentPrice.toFixed(2);
    }

    return (
        <Link
            href={`/product/${product.id}`}
            className="relative grid grid-cols-2 gap-6"
            title={product.title}
        >
            <div className="absolute z-10 flex flex-col text-base leading-4 font-bold gap-2 left-4 top-4 items-center justify-center">
                <span className="bg-white rounded text-center py-1 px-3">NEW</span>
                <span className="bg-green-400 text-white rounded text-center py-1 px-3">
                    -{product.discountPercentage}%
                </span>
            </div>
            <div className="relative bg-neutral-50 h-[300px] flex justify-center items-center">
                <Image
                    className="w-full h-[200px] object-center object-contain"
                    src={product.images[0]}
                    alt={product.title}
                    width={800}
                    height={800}
                />
            </div>
            <div className="flex flex-col gap-1 py-6">
                <ReviewStars rating={product.rating} />
                <p className="font-semibold text-base leading-[26px] truncate mt-4 mb-1">
                    {product.title}
                </p>
                <div className="flex gap-3 text-sm leading-[22px] mb-4">
                    <span className="font-semibold">${currentPrice}</span>
                    {hasDiscount && (
                        <span className="line-through text-neutral-500">${product.price}</span>
                    )}
                </div>
                <p className="grow font-normal text-sm text-neutral-400 line-clamp-4">
                    {product.description}
                </p>
                <Button className="h-[46px] mt-4">Add to Cart</Button>
                <Button variant="outline" className="h-[46px]">
                    <Image src="/icons/heart.svg" alt="heart icon" width={24} height={24} />
                    <span className="ml-1">Wishlist</span>
                </Button>
            </div>
        </Link>
    );
};
export default ProductColumnCard;
