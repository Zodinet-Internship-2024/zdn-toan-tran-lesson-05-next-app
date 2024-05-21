class ProductApi {
    private host: string;

    constructor(host: string) {
        this.host = host;
    }

    async getAllProducts() {
        const res = await fetch(`${this.host}/products`);

        return res.json();
    }

    async getProductsByCategory(category: string) {
        const res = await fetch(`${this.host}/products/category/${category}`);

        return res.json();
    }

    async getProductById(id: string) {
        const res = await fetch(`${this.host}/products/${id}`);

        return res.json();
    }
}

const HOST = process.env.API_HOST ?? 'https://dummyjson.com';

const productApi = new ProductApi(HOST);
export default productApi;
