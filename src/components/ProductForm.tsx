
import type { Products } from '../types/products';
import { useProductForm } from '../hook/useProductForm';
interface ProductFormProps{
  // liste pour verifier les doublons
  products:Products[];
  // fonction quand le formulaire est validé 
  onSubmit:(product: Products) => void;

  // optionnel si en mode modification 
  initialProduct?: Products;

  // optionnel pour changer le texte du bouton 
  submitLabel?: string;
}

export default function ProductForm({ products, onSubmit, initialProduct,submitLabel }: ProductFormProps) {
  
  // constante qui recupere tout les champs envoyer depuis le hook personnalisé
  const { 
    name, setName, 
    price, setPrice, 
    url, setUrl, 
    handleSubmit, 
    messageForm, 
    noErrors 
  } = useProductForm({ products, onSubmit, initialProduct });
  

  
  return (
    <>
      <div className="flex flex-col">
        
        <div>
          {/* bouton pour ajouter un produit */}
          <form action="" className="flex flex-col mx-5" onSubmit={handleSubmit} >
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
              
              <input type="submit" value={submitLabel || (initialProduct ? "Modifier" : "Ajouter")}  className="border mt-5 rounded border-pink-200 bg-pink-100 p-2 cursor-pointer " />

          </form>
          {/*  Message pour les erreur ou ajout  */}
          {messageForm &&(
            <p className={noErrors ? "text-green-500" : "text-red-500"} > {messageForm} </p>
          )}
        </div>
      </div>
    </>
  )
}
