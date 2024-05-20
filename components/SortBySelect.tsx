'use client';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const SortBySelect = () => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SortBySelect;
