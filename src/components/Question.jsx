export default function Question({question,check_reponse}){

    return(
        <div className="questionniare">
            <h3>Quel est ce pays ?</h3>
            <div className="question">
                <div className="divImg">
                    <img src={question.bonneReponse.flag.svg} alt={question.bonneReponse.flag.alt} />
                </div>
                <div className="reponse">
                    {question.reponses.map((rep, idx) => (
                        <button key={idx} value={rep} onClick={(e)=>(
                            check_reponse(e.target.value)
                        )}>{rep}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}