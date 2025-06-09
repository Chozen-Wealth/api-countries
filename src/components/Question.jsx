export default function Question({question,check_reponse}){

    return(
        <div>
            <p>Quel est ce pays ?</p>
            <img src={question.bonneReponse.flag.svg} alt={question.bonneReponse.flag.alt} />
            <div>
                {question.reponses.map((rep, idx) => (
                    <button key={idx} value={rep} onClick={(e)=>(
                        check_reponse(e.target.value)
                    )}>{rep}</button>
                ))}
            </div>
        </div>
    )
}