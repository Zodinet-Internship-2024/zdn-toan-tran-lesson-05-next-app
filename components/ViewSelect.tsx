import Image from 'next/image';
import { Button } from './ui/button';

const ViewSelect = () => {
    return (
        <div className="flex">
            <Button variant="outline">
                <Image
                    src="/icons/grid-view-icon.svg"
                    alt="grid view icon"
                    width={48}
                    height={24}
                />
            </Button>
            <Button variant="outline">
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
