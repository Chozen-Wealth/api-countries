import { useEffect, useState } from "react"

export default function Quiz({data}){
    console.log(data&&data);
    
    const listePays = data?.map((el,index) => ({nom: el.name.common,flag: el.flags}))
    const [question, setQuestion] = useState([])
    const [partie,setPartie] = useState({vie:10,score:0,victoire:0,defaite:0,question:0})
    const [reponse,setReponse] = useState()

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
    

    return(
        <section id="quiz">
            {question?.length > 0 ? 
            <>
                <form>
                    
                    <div>
                        <p>Quel est ce pays ?</p>
                        <img src={question[partie.question].bonneReponse.flag.svg} alt={question[partie.question].bonneReponse.flag.alt} />
                        <div>
                            {question[partie.question].reponses.map((rep, idx) => (
                                <button key={idx} value={rep} onClick={(e)=>(
                                    setReponse(e.target.value)
                                )}>{rep}</button>
                            ))}
                        </div>
                    </div>
                </form>

                <p>
                Ton score est {partie.score} / {question.length}
                tu as gagner {partie.victoire} / {partie.defaite}
                </p>
            </>
            :
            <p>chargement</p>
            
            }
            </section>

    )
}