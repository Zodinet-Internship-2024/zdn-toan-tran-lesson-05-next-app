class CategoryApi {
    private host: string;

    constructor(host: string) {
        this.host = host;
    }

    async getAllCategories() {
        const res = await fetch(`${this.host}/products/categories`);

        return res.json();
    }
}

const HOST = process.env.API_HOST ?? 'https://dummyjson.com';

const categoryApi = new CategoryApi(HOST);
export default categoryApi;
