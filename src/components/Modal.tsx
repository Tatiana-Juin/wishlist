import ProductForm from "./ProductForm"
import type { Products } from '../types/products';
export default function Modal({ onClose, onAddProduct,onDelete,mode, products, initialProduct }: { 
  onClose: () => void, 
  onAddProduct: (product: Products) => void, 
  onDelete:(id:number) =>void,
  mode:'save' | 'delete',
  products: Products[],
  initialProduct?: Products
}) {
  return (
    <>
    <div className="fixed inset-0 z-50 flex item-center justify-center bg-black/60 p-4">
      
      {/* la boite modal */}
      <div className="bg-white w-full sm:max-w-md rounded-lg shadow-2xl overflow-hidden relative max-h-[75vh]" >

        {/* contenu de la modal  */}
        {mode === 'save' ?(
          <>
          <div className="flex justify-between item-center p-4 border-b">
            <h2 className="text-xl font-semibold  "> Ajouter un produit</h2>
            <button onClick={onClose} className="mt-5 p-2 w-24  border border-pink-200 bg-pink-100 rounded cursor-pointer"> X</button>
        </div>

        <div className="p-6">
            
            <ProductForm 
              onSubmit={onAddProduct}
              products={products}
              initialProduct={initialProduct}
            />
        </div>
        </>
        ):(
          <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Supprimer ? 🗑️</h2>
          <p className="text-gray-600 mb-6">
            Es-tu sûr de vouloir retirer <strong>{initialProduct?.name}</strong> de ta liste ?
          </p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => {
                if(initialProduct){
                  onDelete(initialProduct.id);
                  onClose();
                } 
              }}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Confirmer
            </button>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Annuler
            </button>
          </div>
        </div>
        )}
        {/* En tete de la modal  */}
       
        

      </div>

    </div>
      
    </>
  )
}
