import { useEffect } from "react"
import { ProductList } from ".."
import useProducts from "../hooks/useProducts"


export const CompleteListPage = () => {

  const { products, isLoading } = useProducts({})

  // al entrar a la page, scroll desde 0 en y
  useEffect(() => {
    window.scrollTo(0, 40);
  }, [])


  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold py-6">Bienvenido</h1>

      {isLoading && <p>Cargando productos...</p>}

      <ProductList products={products} />
    </div>
  )
}