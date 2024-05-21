interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface CommentResponse {
    comments: Comment[];
    total: number;
    skip: number;
    limit: number;
}

interface Comment {
    id: number;
    body: string;
    postId: number;
    user: User;
}

interface User {
    id: number;
    username: string;
}
