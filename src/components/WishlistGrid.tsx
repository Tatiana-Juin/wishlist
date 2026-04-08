import type { Products } from "../types/products";
import Card from "./Card";
export default function WishlistGrid({products} : {products:Products[]}) {
  return (
    <>
    {/* for show the products add */}
      {products.map((oneProduct)=>{
        return <Card key={oneProduct.id} product={oneProduct}  />
      })}
    </>
  )
}
