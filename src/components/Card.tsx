import type { Products } from "../types/products";
export default function Card({product}:{product:Products}) {
  return (
    <div className="flex flex-col   border  rounded-lg shadow-md bg-white gap-2 my-6">
      <div className="p-4">
          <h3 className="font-bold text-xl">{product.name}</h3>
          <p className="text-gray-600 font-medium">{product.price} €</p>
      </div>
      
      
      {/* Pour lesliens est modification */}
      <div className="border border-pink-200 bg-pink-100 rounded-lg">
          <a href={product.url} target="__blanck" className="mr-10  mt-5   bg-pink-100 p-2 "><i className="bi bi-arrow-up-right"></i></a>
          {/* modification */}
          <button className=" mt-5  bg-pink-100 p-2 cursor-pointer mr-10"><i className="bi bi-pencil-fill"></i></button>
          {/* Supprimer */}
          <button className=" mt-5   bg-pink-100 p-2 cursor-pointer"><i className="bi bi-trash"></i></button>
      </div>
      
      
      
    </div>
  )
}
