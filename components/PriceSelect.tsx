'use client';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const PriceSelect = () => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="All Price" />
            </SelectTrigger>
            <SelectContent></SelectContent>
        </Select>
    );
};

export default PriceSelect;
