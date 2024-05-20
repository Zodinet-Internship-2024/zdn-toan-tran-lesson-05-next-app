import Image from 'next/image';

type ReviewStarsProps = {
    rating: number;
};

const StarFillImg = () => (
    <Image src="/icons/star-fill.svg" alt="star fill icon" width={16} height={16} />
);

const StarNormalImg = () => (
    <Image src="/icons/star-normal.svg" alt="star fill icon" width={16} height={16} />
);

const ReviewStars = ({ rating }: ReviewStarsProps) => {
    const numStars = Math.round(rating);
    const MAX_STAR = 5;
    return (
        <ul className="flex">
            {Array.from({ length: numStars }).map((_, index) => (
                <li key={index}>
                    <StarFillImg />
                </li>
            ))}
            {Array.from({ length: MAX_STAR - numStars }).map((_, index) => (
                <li key={index}>
                    <StarNormalImg />
                </li>
            ))}
        </ul>
    );
};
export default ReviewStars;
