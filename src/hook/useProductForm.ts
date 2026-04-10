import { useState } from "react";
import type { Products } from "../types/products";

// hook accept
interface UseProductFormProps {
    products: Products[];
    initialProduct?: Products; // pour les modification 
    onSubmit: (product: Products) => void;
}

// Utilisation dans la fonction (on utilise le même nom)
export const useProductForm = ({ products, initialProduct, onSubmit }: UseProductFormProps) => {
    // initailisation des etats  => utilise initalProduct au cas ou il est un modification dans la declaration de useState on gere le cas modification et ajout 
    const [name, setName] = useState<string>(initialProduct?.name || "");
    const [price,setPrice] = useState<number>(initialProduct?.price || 0)
    const [url,setUrl] = useState<string>(initialProduct?.url ||"")
    const [noErrors,setNoErrors] = useState<boolean>(true)
    const [messageForm,setMessageForm] = useState<string>("")

    // Function pour valider le formulaire
    const validateForm = (name:string,price:number,url:string)=>{
    setMessageForm("")
    
    const urlRegex = /^https:\/\/.*\..*/;
    if(name.trim()=="" || url.trim()=="" || price <=0  ){
       setMessageForm("Tout les champs sont vide ")
      setNoErrors(false);
      return false;
    }
   
    /*  
        pendant ajout = initialProduct == undefined donc toujours vrai  donc si c'est un nom === doublon 

        pendant modification => si c'est le meme nom ET QUE ID EST LE MEME alors FALSE 
    */
    const isDuplicate = products.some(p=>
        p.name.toLowerCase() === name.trim().toLowerCase() &&
        p.id !== initialProduct?.id
    )
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
    // fonction handleSSubmit pour l'ajout ou la modification 
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()

        if(validateForm(name,price,url)){
            const productData : Products={
                id : initialProduct?.id || Date.now(),
                name:name,
                price:price,
                url:url

            };
            onSubmit(productData)
            // vide les champs si c'est un ajout 
            if(!initialProduct){
                setName("")
                setPrice(0)
                setUrl("")
            }
        }
    }

    // /Retourne un objet avec tout ce dont le formulaire a besoin 
    return {
        name, setName,
        price, setPrice,
        url, setUrl,
        messageForm,
        noErrors,
        handleSubmit 
    }; 
};