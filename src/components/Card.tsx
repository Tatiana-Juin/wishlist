import type { Products } from "../types/products";
export default function Card({ 
  product, 
  onEdit,handleDelete 
}: { 
  product: Products, 
  onEdit: (product: Products) => void,
  handleDelete:(id:number) => void
}) {
  return (
    <div className="flex flex-col  border  rounded-lg shadow-md bg-white gap-2 my-6">
      <div className="p-4">
          <h3 className="font-bold text-xl">{product.name}</h3>
          <p className="text-gray-600 font-medium">{product.price} €</p>
      </div>
      
      
      {/* Pour lesliens est modification */}
      <div className="border border-pink-200 bg-pink-100 rounded-lg flex items-center justify-between ">
        
        <a href={product.url} target="__blanck" className="  mt-2  bg-pink-100 p-2 "><i className="bi bi-arrow-up-right"></i></a>
    
         
        <div className="mt-2 flex gap-2">
            {/* modification */}    
          <button onClick={()=> onEdit(product)} className="  bg-pink-100  cursor-pointer mr-6">
            <i className="bi bi-pencil-fill"></i>
          </button>

        {/* Supprimer */}
          <button className="  bg-pink-100 p-2 cursor-pointer" onClick={()=>handleDelete(product.id)}><i className="bi bi-trash"></i></button>
        </div>
          
      </div>
      
      
      
    </div>
  )
}
