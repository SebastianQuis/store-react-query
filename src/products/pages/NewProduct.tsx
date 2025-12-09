import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import useProductMutation from "../hooks/useProductMutation";

type Inputs = {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};


export const NewProduct = () => {
  const { productMutation } = useProductMutation();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      title: '',
      price: 0,
      description: '',
      image: '',
      category: "men's clothing",
    }
  });

  const tempImage = watch("image");

  const onSubmit = async (data: Inputs) => {
    productMutation.mutate(data);
  }

  return (
    <div className="w-full flex-col">
      <form className="w-full px-12" onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-around gap-8 items-center">

          <div className="flex-col w-full max-w-md">
            <h1 className="text-2xl font-bold py-6">Nuevo producto</h1>
            <Input className="mt-2" type="text" placeholder="Titulo" {...register("title", { required: true })} errorMessage={errors.title && "Este campo es requerido"} />
            <Input className="mt-2" type="number" placeholder="Precio" {...register("price", { required: true, valueAsNumber: true })} errorMessage={errors.price && "Este campo es requerido"} />
            <Input className="mt-2" type="url" placeholder="Imagen URL" {...register("image", { required: true })} errorMessage={errors.image && "Este campo es requerido"} />
            <Textarea className="mt-2" placeholder="Descripción" {...register("description")} />
            <select className="rounded-md p-3 mt-2 bg-gray-800 w-full" {...register("category", { required: true })} >
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">"Este campo es requerido"</p>
            )}
            <br />
            <Button
              isDisabled={productMutation.isPending}
              className="mt-8 hover:bg-gray-600 w-full" type="submit">Crear</Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              className="object-cover w-[450px] h-[550px]"
              // src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              src={tempImage}
            />
          </div>
        </div>
      </form>
    </div>
  )
}