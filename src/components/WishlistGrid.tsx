import type { Products } from "../types/products";
import Card from "./Card";
export default function WishlistGrid({ 
  products, 
  onEdit,
  handleDelete 
}: { 
  products: Products[], 
  onEdit: (product: Products) => void ,
  handleDelete:(id:number) => void
}) {
  return (
    <>
      {products.map((oneProduct)=>{
        return <Card key={oneProduct.id} product={oneProduct} onEdit={onEdit} handleDelete={handleDelete} />
      })}
    </>
  )
}
