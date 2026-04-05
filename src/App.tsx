import { useState } from 'react';
import './App.css'
import  Header  from './components/Header';
import type {Products} from './types/products'
import Modal from './components/Modal';
import WishlistGrid from './components/WishlistGrid';



function App({...props}) {
  // 1. On crée une liste pour mon interface
  const [wishlist, setWishlist] = useState<Products[]>([]);

  const [isVisibleAdding,setIsVisibleAdding] = useState<boolean>(false)

  // Pour faire passer les information il faut une fonction addProduct 
  const addProduct=(newProduct:Products) =>{
    setWishlist([...wishlist,newProduct])
    setIsVisibleAdding(false);
  }

  return (
    <>
    <Header />
    <div className='p-6'>
        {/* Affiche le bouton + que si c'est false */}
      {!isVisibleAdding&& (
        <>
         <button className='rounded mt-5 p-2 w-24 border border-pink-200 bg-pink-100 cursor-pointer' onClick={()=> setIsVisibleAdding(true)}> +</button>
         <WishlistGrid products={wishlist} /> 
         </>    
      )}
    </div>
      
      
      {/* Affiche la modal que si c'est true  */}
      {isVisibleAdding &&(
        <Modal onClose={()=> setIsVisibleAdding(false)} 
        onAddProduct={addProduct} products={wishlist}
        />
      )}
      
      
      
    </>
  );
}

export default App
