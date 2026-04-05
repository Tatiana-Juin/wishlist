import { useState } from 'react';
import type { Products } from '../types/products';

export default function AddProduct({onAddProduct, products=[]}:{onAddProduct : (product:Products)=>void, products:Products[]}) {
  
  const [name,setName] = useState<string>("")
  const [price,setPrice] = useState<number>(0)
  const [url,setUrl] = useState<string>("")
  const [noErrors,setNoErrors] = useState<boolean>(true)
  const [messageForm,setMessageForm] = useState<string>("")

  // function for verificate the error what the user add product 
  const validateForm = (name:string,price:number,url:string)=>{
    setMessageForm("")
    
    const urlRegex = /^https:\/\/.*\..*/;
    if(name.trim()=="" || url.trim()=="" || price <=0  ){
       setMessageForm("Tout les champs sont vide ")
      setNoErrors(false);
      return false;
    }
    const isDuplicate = products.some(p => p.name.toLowerCase() === name.trim().toLowerCase());
    if (isDuplicate) {
      setNoErrors(false);
      setMessageForm("Ce nom de produit existe déjà ! 🛑");
      return false;
    }

    if(!urlRegex.test(url)){
      setNoErrors(false);
      setMessageForm("L'URL doit commencer par https:// et contenir un point.");
      return false;
    }
    
    setNoErrors(true);
    return true;
  
  }

  const handleAddProduct=(e: React.FormEvent) =>{
    e.preventDefault()
    
    

    if(validateForm(name,price,url)){
       const newProduct: Products={
      id:Date.now(),
      name:name,
      price:price,
      url:url,
      category:'Autre'
    }
      onAddProduct(newProduct)
      setName("")
      setPrice(0)
      setUrl("")
     
    }
    
  }
  

  
  return (
    <>
      <div className="flex flex-col">
        
        <div>
          <form action="" className="flex flex-col mx-5" onSubmit={handleAddProduct}>
              <label >Nom</label>
              <input type="text"
                name="name" 
                id="name" 
                placeholder="Nom de l'objet " 
                className="border"
                value={name}
                onChange={(e)=>setName(e.target.value.toLowerCase().trim())}
               />

              <label className="mt-5">Prix</label>
              <input type="number"
                name="price" 
                step="0.01" 
                id="price" 
                placeholder="Prix de l'objet " 
                className="border"
                value={price}
                onChange={(e)=>setPrice(Number(e.target.value))} 
              />

              <label className="mt-5">URL</label>
              <input type="text"
                name="url" 
                id="url" 
                placeholder="url de l'objet " 
                className="border" 
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
              />
              
              <input type="submit" value="Ajouter"  className="border mt-5 rounded border-pink-200 bg-pink-100 p-2 cursor-pointer " />

          </form>
          {/* MESSAGE QUI APPARAIT APRES ALA VALIDATION DU FORMULAIRE  */}
          {messageForm &&(
            <p className={noErrors ? "text-green-500" : "text-red-500"} > {messageForm} </p>
          )}
        </div>
      </div>
    </>
  )
}
