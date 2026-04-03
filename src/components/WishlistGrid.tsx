import type { Products } from "../types/products";
import Card from "./Card";
export default function WishlistGrid({products} : {products:Products[]}) {
  return (
    <>
      {products.map((oneProduct)=>{
        return <Card key={oneProduct.id} product={oneProduct}  />
      })}
    </>
  )
}
