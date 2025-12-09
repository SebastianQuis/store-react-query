import { ProductList } from ".."
import useProducts from "../hooks/useProducts"

export const WomensPage = () => {

  const { products, isLoading } = useProducts({ filterKey: "women's clothing" })


  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold py-6">Bienvenido</h1>

      {isLoading && <p>Cargando productos...</p>}


      <ProductList products={products} />

    </div>
  )
}
