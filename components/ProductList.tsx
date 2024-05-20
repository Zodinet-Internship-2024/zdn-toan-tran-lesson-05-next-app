'use client';
import { useEffect, useState } from 'react';
import ProductFilter from './ProductFilter';
import productApi from '@/api/product-api';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const category = searchParams.get('category') ?? 'all';
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

    return (
        <div>
            <ProductFilter />
            <div className="grid grid-cols-4 gap-8 mt-10">
                {products.map((product: Product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
