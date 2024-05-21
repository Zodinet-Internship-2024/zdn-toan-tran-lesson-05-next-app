import { Suspense } from 'react';
import ProductInformation from './ProductInformation';
import CustomerReviews from './CustomerReviews';

type ProductDetailPageProps = {
    params: {
        productId: string;
    };
};

const ProductDetailPage = ({ params: { productId } }: ProductDetailPageProps) => {
    return (
        <main className="max-w-[1140px] mx-auto px-4 flex flex-col gap-10 pb-[120px]">
            <Suspense fallback={<div>Loading...</div>}>
                <ProductInformation productId={productId} />
            </Suspense>
            <Suspense>
                <CustomerReviews productId={productId} />
            </Suspense>
        </main>
    );
};
export default ProductDetailPage;
