import productApi from '@/api/product-api';
import ReviewStars from '@/components/ReviewStars';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ProductDetailImages from './ProductDetailImages';

type ProductInformationProps = {
    productId: string;
};

const ProductInformation = async ({ productId }: ProductInformationProps) => {
    const res: Product = await productApi.getProductById(productId);
    let currentPrice = res.price;
    if (res.discountPercentage > 0) {
        currentPrice = res.price - (res.price * res.discountPercentage) / 100;
        currentPrice = +currentPrice.toFixed(2);
    }
    return (
        <div className="grid grid-cols-2 gap-[64px] py-4">
            <div className=" bg-neutral-100 flex flex-col items-center">
                <ProductDetailImages images={res.images} />
            </div>
            <section className="flex flex-col gap-4">
                <ReviewStars rating={res.rating} />
                <h1 className="text-3xl font-medium">{res.title}</h1>
                <p className="text-base text-neutral-400 font-normal">{res.description}</p>
                <div className="flex gap-3 border-b pb-4">
                    <span className="font-semibold text-2xl">${currentPrice}</span>
                    {res.discountPercentage > 0 && (
                        <span className="line-through text-neutral-500 text-2xl">${res.price}</span>
                    )}
                </div>
                <div className="w-full flex gap-6">
                    <div className="flex ">
                        <Button variant="secondary">-</Button>
                        <input
                            className="w-8 text-center bg-secondary outline-none focus:outline-none"
                            value="1"
                        />
                        <Button variant="secondary">+</Button>
                    </div>
                    <Button variant="outline" className="grow">
                        <Image src="/icons/heart.svg" alt="heart icon" width={24} height={24} />
                        <span className="ml-1">Wishlist</span>
                    </Button>
                </div>
                <Button className="w-full">Add to Cart</Button>
            </section>
        </div>
    );
};
export default ProductInformation;
