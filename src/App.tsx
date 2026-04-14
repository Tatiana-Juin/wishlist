import { useState } from 'react';
import './App.css'
import  Header  from './components/Header';
import type {Products} from './types/products'
import Modal from './components/Modal';
import WishlistGrid from './components/WishlistGrid';



function App() {
  // 1. On crée une liste pour mon interface
  const [wishlist, setWishlist] = useState<Products[]>([]);
  // visibilité 
  const [isVisibleAdding,setIsVisibleAdding] = useState<boolean>(false)
  // selectionner un produit 
  const [selectedProduct, setSelectedProduct] = useState<Products | undefined>(undefined);

  // Pour la suppression - pour ouvrir la modal 
  const [modalMode, setModalMode] = useState<'save' | 'delete'>('save');

  // Pour ajouter ou modifier un produit 
  const handleSaveProduct = (productData : Products) =>{
    if(selectedProduct){
      // modification
      setWishlist(wishlist.map(p => p.id === productData.id ? productData : p));
    }else{
      setWishlist([...wishlist, productData]);
    }
    setIsVisibleAdding(false);
    setSelectedProduct(undefined);
  }
  // pour modifier un produit => la modal 
  const handleEdit = (product: Products) => {
    setSelectedProduct(product); // On mémorise le produit à changer
    setIsVisibleAdding(true);
    setModalMode("save")    
  };
  // pour afficher la modal pour la confirmation de la suppression
  const confirmDelete = (product: Products) =>{
    setSelectedProduct(product);
    setModalMode('delete');
    setIsVisibleAdding(true);
  }

  // fonction pour supprimer un produit 
  const handleDelete = (id:number)=>{
    const updatedWishlist = wishlist.filter(p=>p.id !== id)
    // on met a jour la liste 
    setWishlist(updatedWishlist)
  }  

  return (
    <>
    <Header items={wishlist} />
    <div className='p-6'>
        {/* Pour voir le bouton + */}
      {!isVisibleAdding&& (
        <>
         <button className='rounded mt-5 p-2 w-24 border border-pink-200 bg-pink-100 cursor-pointer' onClick={()=> {
          setSelectedProduct(undefined);
          setModalMode("save")
          setIsVisibleAdding(true);
          }}> +</button>
         <WishlistGrid products={wishlist} onEdit={handleEdit} onConfirmDelete={confirmDelete}/> 
         </>    
      )}
    </div>
    
      {/* montre la modal que si c'est vrai   */}
      {isVisibleAdding &&(
        <Modal onClose={()=> setIsVisibleAdding(false)} 
        onAddProduct={handleSaveProduct} onDelete={handleDelete} mode={modalMode} products={wishlist} initialProduct={selectedProduct}
        />
      )}
      
    </>
  );
}

export default App
