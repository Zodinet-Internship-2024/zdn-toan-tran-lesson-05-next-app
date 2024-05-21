class CommentApi {
    private host: string;

    constructor(host: string) {
        this.host = host;
    }

    async getCommentsByProductId(productId: string) {
        const res = await fetch(`${this.host}/comments/post/${productId}`);
        return res.json();
    }
}

const HOST = process.env.API_HOST ?? 'https://dummyjson.com';

const commentApi = new CommentApi(HOST);
export default commentApi;
