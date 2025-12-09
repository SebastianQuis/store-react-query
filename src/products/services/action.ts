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


