import { useEffect, useState } from "react"
import Question from "../components/question";
import BonneReponse from "../components/BonneReponse";
import MauvaiseReponse from "../components/MauvaiseReponse";

export default function Quiz({data}){
    console.log(data&&data);
    
    const listePays = data?.map((el,index) => ({nom: el.name.common,flag: el.flags}))
    const [question, setQuestion] = useState([])
    const [comp,setComp] = useState(0)
    const [partie,setPartie] = useState({vie:10,score:0,victoire:0,defaite:0,question:0})

    useEffect(() => {
        const start = () => {
            setPartie({...partie,score:0,question:0})
            const listeQuestion = [];
            if (listePays.length<=0){
                return
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
                return listeQuestion;
            };

        setQuestion(start());
    }, [data]);
    console.log(question&&question);
    
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
                    {comp===0&&(<Question partie={partie} question={question[partie.question]} check_reponse={check_reponse} />)}
                    {comp===1&&(<BonneReponse partie={partie} setComp={setComp} setPartie={setPartie} question={question[partie.question]} suivant={suivant}/>)}
                    {comp===2&&(<MauvaiseReponse partie={partie} setComp={setComp} setPartie={setPartie} question={question[partie.question]} suivant={suivant} />)}
                    
                    
                </div>

                <p>Ton score est {partie.score} / {question.length}</p>
                <p>tu as gagner {partie.victoire} partie / tu as perdu {partie.defaite} partie</p>
            </>
            :
            <p>chargement</p>
            
            }
        </section>

    )
}