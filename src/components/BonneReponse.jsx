import { useEffect } from "react"

export default function BonneReponse({partie,setPartie,question,suivant}){
    useEffect(()=>{
        setPartie({...partie,score: partie.score+1})
    },[])
    

    return(
        <div className="choisi">
            <p>Bonne reponse !! la reponse est bien {question.bonneReponse.nom}</p>
            <button onClick={suivant}>Continuer</button>
        </div>
    )
}