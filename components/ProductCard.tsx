import Image from 'next/image';
import ReviewStars from './ReviewStars';
import Link from 'next/link';

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    let currentPrice = product.price;
    const hasDiscount = product.discountPercentage > 0;

    if (hasDiscount) {
        currentPrice = product.price - (product.price * product.discountPercentage) / 100;

        currentPrice = +currentPrice.toFixed(2);
    }

    return (
        <Link
            href={`/product/${product.id}`}
            className="relative flex flex-col gap-3"
            title={product.title}
        >
            <div className="absolute z-10 flex flex-col text-base leading-4 font-bold gap-2 left-4 top-4">
                <span className="bg-white rounded text-center py-1 px-3">NEW</span>
                <span className="bg-green-400 text-white rounded text-center py-1 px-3">
                    -{product.discountPercentage}%
                </span>
            </div>
            <div className="relative bg-neutral-50 h-[300px] flex justify-center items-center">
                <Image
                    className="w-full h-[200px] object-center object-cover"
                    src={product.images[0]}
                    alt={product.title}
                    width={100}
                    height={200}
                />
            </div>
            <div className="flex flex-col gap-1">
                <ReviewStars rating={product.rating} />
                <p className="font-semibold text-base leading-[26px] truncate">{product.title}</p>
                <div className="flex gap-3 text-sm leading-[22px]">
                    <span className="font-semibold">${currentPrice}</span>
                    {hasDiscount && (
                        <span className="line-through text-neutral-500">${product.price}</span>
                    )}
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;
