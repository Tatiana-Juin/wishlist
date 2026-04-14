import type { Products } from "../types/products";


export default function Header({items}:{items : Products[]}) {

  const total : number = items.reduce((acc,item) => acc + item.price,0)
  return (
    <>
      <header >
          <h1 className="text-3xl font-bold underline text-center mt-6">
              wishlist - liste des souhait 
          </h1>
          <h2 className="bold">Total : {total}€</h2>
      </header>
    </>
  )
}
