import HomeBreadcrumb from '@/components/HomeBreadcrumb';
import ProductList from '@/components/ProductList';

export default function Home() {
    return (
        <main className="w-full max-w-[1140px] mx-auto px-8 pb-10">
            <div className='bg-[url("/images/home-banner.png")] h-[392px] flex flex-col gap-6 justify-center items-center mb-[60px] object-contain bg-no-repeat bg-center'>
                <HomeBreadcrumb />
                <h1 className="font-medium text-[54px] leading-[58px]">Shop Page</h1>
                <p className="font-normal text-xl ">Let’s design the place you always imagined.</p>
            </div>
            <ProductList />
        </main>
    );
}
