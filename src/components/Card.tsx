import type { Products } from "../types/products";
export default function Card({product}:{product:Products}) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col gap-2">
      <h3 className="font-bold text-xl">{product.name}</h3>
      <p className="text-gray-600 font-medium">{product.price} €</p>
      <a href={product.url} target="__blanck">Lien</a>
      <span className="text-xs bg-gray-100 px-2 py-1 rounded self-start">
        {product.category}
      </span>
      
    </div>
  )
}
