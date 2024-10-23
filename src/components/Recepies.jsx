import { useEffect } from "react";
import { useState } from "react";


const Recepies = ({handleRecepies}) => {
    const [recepies, setRecepies] = useState([]);

    useEffect(() =>{
        fetch("recipe.json")
        .then(res => res.json())
        .then(data => setRecepies(data))
    }, [])
    return (
        <div className="md:w-2/3 p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                recepies.map(recepie => {
                    return(
                        <div className="card shadow-xl border-2" key={recepie.recipe_id}>
                        <figure>
                          <img
                            src={recepie.recipe_img}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{recepie.recipe_title}</h2>
                          <p className="font-semibold">{recepie.short_description}</p>
                          <h3 className="font-semibold">Ingradients : {recepie.ingredients.length}</h3>
                          <ul className="ml-10">
                            {
                                recepie.ingredients.map((item, index)  => <li key={index}  className="list-disc font-semibold">{item}</li>)
                            }
                          </ul>
                          <div className="flex gap-10">
                            <div className="flex items-center">
                               <i className="fa-regular fa-clock mr-2 text-xl"></i>
                               <p className="font-semibold">{recepie.preparing_time} minute</p>
                            </div>
                            <div className="flex items-center">
                                <i className="fa-solid fa-fire-flame-curved mr-2 text-xl"></i>                                
                                <p className="font-semibold">{recepie.calories} calories</p>
                            </div>
                          </div>
                          <div className="card-actions ">
                            <button onClick={() => handleRecepies(recepie)} className="btn rounded-full bg-green-500 text-white">Want to cook</button>
                          </div>
                        </div>
                      </div>  
                        
                    )
                })
            }
            </div>

        </div>
    );
};

export default Recepies;