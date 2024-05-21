'use client';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const CommentFilterSelect = () => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Comments</SelectItem>
                <SelectItem value="positive">Positive Comments</SelectItem>
                <SelectItem value="negative">Negative Comments</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default CommentFilterSelect;
