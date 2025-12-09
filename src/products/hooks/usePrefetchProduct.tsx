import { useQueryClient } from "@tanstack/react-query";
import { getProductById } from "../services/action";

export const usePrefetchProduct = () => {

    const queryClient = useQueryClient();

    const prefetchProduct = (id: number) => {
        queryClient.prefetchQuery({
            queryKey: ['product', { id }],
            queryFn: () => getProductById(id),
            staleTime: 1000 * 60 * 60 * 5, // 5 horas
        });
    }


    return { prefetchProduct }
}

