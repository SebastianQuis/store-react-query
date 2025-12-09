import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../services/action';
import { Product } from '../interface/product';
// import { useNavigate } from 'react-router-dom';

export default function useProductMutation() {

    const queryClient = useQueryClient();
    // const navigate = useNavigate();

    const productMutation = useMutation({
        mutationFn: createProduct,

        onMutate: (newProduct) => {
            const optimisticProduct = { id: Math.random(), ...newProduct }
            console.log(optimisticProduct);

            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: newProduct.category }],
                (oldData) => {
                    if (!oldData) return [optimisticProduct];

                    return [...oldData, optimisticProduct];
                }
            )

            console.log(optimisticProduct);

            return {
                optimisticProduct
            }

        },

        onSuccess: (data, _, context) => {

            // eliminando el cache del producto con id temporal
            queryClient.removeQueries({
                queryKey: ['products', { filterKey: context.optimisticProduct.id }],
            });

            queryClient.setQueryData(
                ['products', { filterKey: data.category }],
                (oldData: Product[]) => {
                    if (!oldData) return [data];

                    // el optimistic es un id temporal, lo reemplazamos por el real
                    return oldData.map((cacheProduct: Product) =>
                        cacheProduct.id === context.optimisticProduct.id
                            ? data : cacheProduct
                    );
                }
            );

            // navegar a la página del nuevo producto
            // navigate(`/product/${data.id}`);

            // queryClient.invalidateQueries({
            //     queryKey: ['products', { filterKey: data.category }],
            // });
        },


        onError: (error, variable, context) => {
            console.log({ error, variable, context });

            // eliminando el cache del producto con id temporal
            queryClient.removeQueries({
                queryKey: ['products', context?.optimisticProduct.id],
            });

            queryClient.setQueryData(
                ['products', { filterKey: variable.category }],
                (oldData: Product[]) => {
                    if (!oldData) return [];

                    // el optimistic es un id temporal, lo reemplazamos por el real
                    return oldData.filter(
                        (cacheProduct: Product) =>
                            cacheProduct.id !== context?.optimisticProduct.id
                    );
                }
            );
        }

    });

    return {
        productMutation
    }
}
