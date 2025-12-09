import { Product } from "..";
import { productsApi } from "../api/products-api";



interface Props {
    filterKey?: string,
}


export const getProducts = async ({ filterKey }: Props): Promise<Product[]> => {

    const { data } = await productsApi.get<Product[]>("/products", {
        params: {
            ...(filterKey ? { category: filterKey } : {}),
        }
    });

    return data;
}

export const getProductById = async (id: number): Promise<Product> => {

    const { data } = await productsApi.get<Product>(`/products/${id}`);

    return data;
}

export const createProduct = async (product: Omit<Product, 'id' | 'rating'>): Promise<Product> => {
    // await sleep(5);

    // throw new Error("Error al crear el producto");

    const { data } = await productsApi.post<Product>("/products", product);
    return data;
}


export const sleep = (seconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}