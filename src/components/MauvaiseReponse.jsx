import { useEffect } from "react"

export default function MauvaiseReponse({partie,question,setPartie}){
    useEffect(()=>{
        setPartie({...partie,score: partie.score-1})
    },[])

    return(
        <div>
            <p>mauvaise reponse, la bonne reponse est {question.bonneReponse.nom}</p>
            <button onClick={suivant}>Continuer</button>
        </div>
    )
}