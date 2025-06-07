import { useEffect, useState } from "react"

export default function Quiz({data}){
    const listePays = data?.map(el => ({nom: el.name.common,flag: el.flags}))
    const [question, setQuestion] = useState([])
    const [partie,setPartie] = useState({vie:10,score:0,victoire:0,defaite:0})

    useEffect(() => {
        const start = () => {
            const listeQuestion = [];
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
    }, [listePays]);
    

    return(
        <section id="quiz">
            <form onSubmit={handleSubmit}>
                {question.map((q, i) => (
                <div key={i}>
                    <p>Quel est ce pays ?</p>
                    <img src={q.bonneReponse.flags.svg} alt={`Drapeau de ${q.bonneReponse.flags.alt}`} />
                    <div>
                        {q.reponses.map((rep, idx) => (
                            <label key={idx}>
                            <input
                                type="radio"
                                name={`question-${i}`}
                                value={rep}
                                checked={reponsesUtilisateur[i] === rep}
                                onChange={() => handleChange(i, rep)}
                                required
                            />{" "}
                            {rep}
                            </label>
                        ))}
                    </div>
                </div>
                ))}

                <button type="submit">Valider</button>
            </form>

            {score !== null && (
                <p>
                Ton score est {score} / {questions.length}
                </p>
            )}
            </section>

    )
}