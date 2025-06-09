import { useEffect, useState } from "react"
import Question from "../components/question";
import BonneReponse from "../components/BonneReponse";
import MauvaiseReponse from "../components/MauvaiseReponse";
import Resultat from "../components/resultat";

export default function Quiz({data}){
    // console.log(data&&data);
    
    const listePays = data?.map((el) => ({nom: el.name.official,flag: el.flags}))
    const [question, setQuestion] = useState([])
    const [comp,setComp] = useState(0)
    const [partie,setPartie] = useState({score:0,victoire:0,defaite:0,question:0})

    function start() {
        const listeQuestion = [];
        if (listePays.length===0){
            return;
        }
        for (let i = 0; i < 5; i++) {
            const random = [...listePays].sort(() => 0.5 - Math.random());
            const candidat = random[0];
            if (listeQuestion.some(q => q.bonneReponse.nom === candidat.nom)) {
                i--;
                continue;
            }
            listeQuestion.push({
                bonneReponse: candidat,
                reponses: [random[0].nom, random[1].nom, random[2].nom, random[3].nom].sort(() => 0.5 - Math.random()),
            });
        }

        setPartie(prev => ({ ...prev, score: 0, question: 0 }));
        setQuestion(listeQuestion);
    }
    useEffect(()=>{
        start()
    },[data])
    
    function check_reponse(reponse){
        if(reponse===question[partie.question].bonneReponse.nom){
            setComp(1)
        }else{
            setComp(2)
        }
    }
    function suivant(){
        setPartie({...partie,question: partie.question+1})
        setComp(0)
    }

    return(
        <section id="quiz">
            {question?.length > 0 ? 
            <>
                <div className="questinaire">
                    {question[partie.question] != undefined ?
                    <>
                    {comp===0&&(<Question partie={partie} question={question[partie.question]} check_reponse={check_reponse} />)}
                    {comp===1&&(<BonneReponse partie={partie} setComp={setComp} setPartie={setPartie} question={question[partie.question]} suivant={suivant}/>)}
                    {comp===2&&(<MauvaiseReponse partie={partie} setComp={setComp} setPartie={setPartie} question={question[partie.question]} suivant={suivant} />)}
                    </>
                    :<Resultat partie={partie} restart={start} question={question} setPartie={setPartie}/>}
                    
                </div>
                <div className="score">
                    <p>Ton score est {partie.score} / {question.length}</p>
                    <div className="total">
                        <p>tu as gagner {partie.victoire} parties </p>
                        <p> tu as perdu {partie.defaite} parties</p>
                    </div>
                </div>
            </>
            :
            <p>chargement</p>
            
            }
        </section>

    )
}