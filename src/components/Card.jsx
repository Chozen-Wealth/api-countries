import { useNavigate } from "react-router-dom"


export default function Card({cca3 ,population, region, capital, pays, drapeau}) {

    const navigate = useNavigate()

    return(
        <div onClick={()=> navigate(`/details/${cca3}`)} className="Card">
            <div className="cardTop">
                <img src={drapeau} alt="" />
            </div>
            <div className="cardBot">
                <span className="titre">{pays}</span>
                <div className="cardInfos">
                    <span className="population"><b>Population :</b> {population.toLocaleString("en-EN")}</span>
                    <span className="region"><b>Region :</b> {region}</span>
                    <span className="capital"><b>Capital :</b> {capital}</span>
                </div>
            </div>
        </div>
    )
}
