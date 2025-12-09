import { useNavigate, useParams } from "react-router-dom"
import { ProductCard } from ".."
import useProductById from "../hooks/useProductById";
import { useEffect } from "react";

export const ProductById = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  if (Number.isNaN(Number(id))) {
    console.log(id);
    navigate('/');
  }

  const { isLoading, product } = useProductById(Number(id));


  // al entrar a la page, scroll desde 0 en y
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className="flex-col">
      {isLoading && <p>Cargando productos...</p>}

      {product &&
        <ProductCard product={product} />
      }

    </div>
  )
}