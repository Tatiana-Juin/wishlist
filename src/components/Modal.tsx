import ProductForm from "./ProductForm"
import type { Products } from '../types/products';
export default function Modal({ onClose, onAddProduct, products, initialProduct }: { 
  onClose: () => void, 
  onAddProduct: (product: Products) => void, 
  products: Products[],
  initialProduct?: Products
}) {
  return (
    <>
    <div className="fixed inset-0 z-50 flex item-center justify-center bg-black/60 p-4">

      {/* la boite modal */}
      <div className="bg-white w-full sm:max-w-md rounded-lg shadow-2xl overflow-hidden relative max-h-[75vh]" >

        {/* En tete de la modal  */}
        <div className="flex justify-between item-center p-4 border-b">
            <h2 className="text-xl font-semibold  "> Ajouter un produit</h2>
            <button onClick={onClose} className="mt-5 p-2 w-24  border border-pink-200 bg-pink-100 rounded cursor-pointer"> X</button>
        </div>

        <div className="p-6">
            {/* <AddProduct onAddProduct={onAddProduct} products={products}/> */}
            <ProductForm 
              onSubmit={onAddProduct}
              products={products}
              initialProduct={initialProduct}
            />
        </div>
        

      </div>

    </div>
      
    </>
  )
}
