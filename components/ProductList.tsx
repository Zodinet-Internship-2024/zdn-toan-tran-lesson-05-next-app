'use client';
import { useEffect, useState } from 'react';
import ProductFilter from './ProductFilter';
import productApi from '@/api/product-api';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';
import ProductColumnCard from './ProductColumnCard';
import { cn } from '@/lib/utils';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const category = searchParams.get('category') ?? 'all';
    let view = searchParams.get('view') ?? 'grid';
    useEffect(() => {
        const fetchProduct = async () => {
            let res;
            if (category === 'all') {
                res = await productApi.getAllProducts();
            } else {
                res = await productApi.getProductsByCategory(category);
            }
            if (res) {
                setProducts(res.products ?? []);
            }
        };

        fetchProduct();
    }, [category]);

    if (view !== 'grid' && view !== 'column') {
        view = 'grid';
    }

    const viewCard: { [key: string]: React.ElementType } = {
        grid: ProductCard,
        column: ProductColumnCard,
    };

    const CardOnView = viewCard[view];

    return (
        <div>
            <ProductFilter />
            <div
                className={cn(
                    'grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10',
                    view === 'column' && 'grid-cols-1 lg:grid-cols-2'
                )}
            >
                {products.map((product: Product) => (
                    <CardOnView product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
