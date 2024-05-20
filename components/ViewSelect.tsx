'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '@/hooks/useCreateQueryString';
import { cn } from '@/lib/utils';

const ViewSelect = () => {
    const searchParams = useSearchParams();
    const createQueryString = useCreateQueryString();
    const router = useRouter();
    const handleChangeView = (view: string) => {
        const queryString = createQueryString('view', view);
        router.push(`/?${queryString}`);
    };

    const view = searchParams.get('view') ?? 'grid';
    return (
        <div className="flex">
            <Button
                className={cn(view === 'grid' && 'bg-neutral-100')}
                variant="outline"
                onClick={() => handleChangeView('grid')}
            >
                <Image
                    src="/icons/grid-view-icon.svg"
                    alt="grid view icon"
                    width={48}
                    height={24}
                />
            </Button>
            <Button
                className={cn(view === 'column' && 'bg-neutral-100')}
                variant="outline"
                onClick={() => handleChangeView('column')}
            >
                <Image
                    src="/icons/column-view-icon.svg"
                    alt="column view icon"
                    width={48}
                    height={24}
                />
            </Button>
        </div>
    );
};
export default ViewSelect;
