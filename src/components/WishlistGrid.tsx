import type { Products } from "../types/products";
import Card from "./Card";
export default function WishlistGrid({ 
  products, 
  onEdit 
}: { 
  products: Products[], 
  onEdit: (product: Products) => void 
}) {
  return (
    <>
      {products.map((oneProduct)=>{
        return <Card key={oneProduct.id} product={oneProduct} onEdit={onEdit} />
      })}
    </>
  )
}
