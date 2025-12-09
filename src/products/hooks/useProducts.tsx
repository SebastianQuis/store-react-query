import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/action";

interface Props {
    filterKey?: string
}


export default function useProducts({ filterKey }: Props) {

    const { data: products = [], isLoading, isFetching, isError, error } = useQuery({
        queryKey: ['products', { filterKey }],
        queryFn: () => getProducts({ filterKey }),
        staleTime: 1000 * 60 * 60, // 1 hora
    });

    return {
        products,
        isLoading,
        isFetching,
        isError,
        error,
    };
}
