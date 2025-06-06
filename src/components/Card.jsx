import { useNavigate } from "react-router-dom"


export default function Card({cca3 ,population, region, capital, pays, drapeau, favoris, setFavoris, drapeauAlt}) {

    const navigate = useNavigate()

    const HandleClick = (e, element)=>{
        e.stopPropagation()
        if (favoris.includes(element)) {
            setFavoris(prev => prev.filter(ancien => ancien !== element))
        }
        else {
            setFavoris(prev => [...prev, element])
        }
    }

    return(
        <div onClick={()=> navigate(`/details/${cca3}`)} className="Card">
            <div className="cardTop">
                <img src={drapeau} alt={drapeauAlt} />
                <div onClick={(e)=> HandleClick(e, cca3)} className={`divHeart ${favoris.includes(cca3) ? "active" : ""}`}>
                    <svg className={`w-6 h-6 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/></svg>
                </div>
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
