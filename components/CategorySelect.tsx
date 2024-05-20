'use client';
import categoryApi from '@/api/category-api';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import useCreateQueryString from '@/hooks/useCreateQueryString';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CategorySelect = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();
    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await categoryApi.getAllCategories();

            if (!categories) return;

            setCategories(categories);
        };

        fetchCategories();
    }, []);
    const createQueryString = useCreateQueryString();
    const handleSelect = (value: string) => {
        const queryString = createQueryString('category', value);
        console.log(queryString);

        router.push(`/?${queryString}`);
    };

    return (
        <Select onValueChange={handleSelect}>
            <SelectTrigger>
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent defaultValue={selected}>
                <SelectGroup>
                    {categories.map((category: string) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default CategorySelect;
