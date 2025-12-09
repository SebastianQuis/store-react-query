import { redirect, useParams } from "react-router-dom"
import { ProductCard } from ".."
import useProductById from "../hooks/useProductById";
import { useEffect } from "react";

export const ProductById = () => {

  const { id } = useParams();

  if (Number.isNaN(Number(id))) {
    redirect('/');
  }

  const { isLoading, product } = useProductById(Number(id));


  // al entrar a la page, scroll desde 0 en y
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className="flex-col">
      {/* <h1 className="text-2xl font-bold">Producto by id</h1> */}

      {isLoading && <p>Cargando productos...</p>}

      {product &&
        <ProductCard product={product} />
      }

    </div>
  )
}