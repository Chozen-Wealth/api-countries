import { useEffect } from "react"

export default function MauvaiseReponse({question,suivant}){

    return(
        <div className="choisi">
            <p>mauvaise reponse, la bonne reponse est {question.bonneReponse.nom}</p>
            <button onClick={suivant}>Continuer</button>
        </div>
    )
}