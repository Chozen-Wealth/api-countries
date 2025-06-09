import { useEffect } from "react"

export default function Resultat({partie,setPartie,question,restart}){
    useEffect(()=>{
        if (partie.score >= (question.length/2)){
            setPartie({...partie,victoire:partie.victoire+1})
        } else {
            setPartie({...partie,defaite:partie.defaite+1})
        }
    },[])
    return(
        <div className="choisi">
            {
                partie.score >= (question.length/2)?
                <p>Vous Avez gagnez !!!</p>
                :
                <p>Vous avez perdu !!!</p>
            }
            <button onClick={restart}>Rejouer</button>
        </div>
    )
}