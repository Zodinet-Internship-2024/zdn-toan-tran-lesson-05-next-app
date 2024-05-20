import CategorySelect from './CategorySelect';
import PriceSelect from './PriceSelect';
import SortBySelect from './SortBySelect';
import ViewSelect from './ViewSelect';

const ProductList = () => {
    return (
        <div className="flex items-center justify-between">
            <section className="flex gap-6">
                <div className="min-w-[262px]">
                    <p className="mb-2 font-semibold text-base leading-[26px] text-neutral-400">
                        CATEGORIES
                    </p>
                    <CategorySelect />
                </div>
                <div className="min-w-[262px]">
                    <p className="mb-2 font-semibold text-base leading-[26px] text-neutral-400">
                        PRICE
                    </p>
                    <PriceSelect />
                </div>
            </section>
            <section className="flex self-end">
                <SortBySelect />
                <ViewSelect />
            </section>
        </div>
    );
};

export default ProductList;
