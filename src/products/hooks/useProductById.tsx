import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/action";



export default function useProductById(id: number) {

    const { data: product, isLoading, isFetching, isError, error } = useQuery({
        queryKey: ['products', { id }],
        queryFn: () => getProductById(id),
        staleTime: 1000 * 60 * 60, // 1 hora
    });

    return {
        product,
        isLoading,
        isFetching,
        isError,
        error,
    };
}
