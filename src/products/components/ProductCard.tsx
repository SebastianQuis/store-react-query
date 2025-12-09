import { Card, Image } from "@nextui-org/react";
// import polo from "../../assets/polo-ecommerce.jpg";
import { Product } from "..";
import { Link } from "react-router-dom";


interface Props {
  product: Product;
  prefetchProduct?: (id: number) => void;
}

export const ProductCard = ({ product, prefetchProduct }: Props) => {


  return (
    <Link to={`/product/${product.id}`} className="cursor-pointer" onMouseEnter={prefetchProduct && (() => prefetchProduct(product.id))}>
      <Card
        className="h-full relative flex flex-col border border-white bg-white">
        {/* imagen */}
        <div className="w-full h-[250px] grid place-items-center">
          <Image
            src={product.image}
            alt="tailwind logo"
            width={200}
            height={200}
            className="rounded-xl p-10 bg-white"
          />
        </div>
        {/* detalles */}
        <div className="w-full bg-white flex flex-col justify-between h-40 p-3">
          <div className="flex flex-col ">
            <p className="text-gray-500 font-medium hidden md:block">{product.category}</p>
            <h3 className="font-black text-gray-800 text-xl line-clamp-2">{product.title}</h3>
          </div>

          <p className="text-xl font-black text-gray-800">
            ${product.price}
            <span className="font-normal text-gray-600 text-base"> +impuesto</span>
          </p>
        </div>
      </Card>
    </Link>
  );
}
