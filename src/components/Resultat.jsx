import { useEffect } from "react"

export default function Resultat(partie,setPartie,question){
    useEffect(()=>{
        if (partie.score >= (question.lenght/2)){
            setPartie({...partie,victoire:partie.victoire+1})
        } else {
            setPartie({...partie,defaite:partie.defaite+1})
        }
    },[])
    return(
        <div>
            {
                partie.score >= (question.lenght/2)?
                <p>Vous Avez gagnez</p>
                :
                <p>Vous avez perdu</p>
            }
        </div>
    )
}