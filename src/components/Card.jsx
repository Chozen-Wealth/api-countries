

export default function Card({population, region, capital, pays, drapeau}) {
    return(
        <div className="Card">
            <div className="cardTop">
                <img src={drapeau} alt="" />
            </div>
            <div className="cardBot">
                <span className="titre">{pays}</span>
                <div className="cardInfos">
                    <span className="population"><b>Population :</b> {population}</span>
                    <span className="region"><b>Region :</b> {region}</span>
                    <span className="capital"><b>Capital :</b> {capital}</span>
                </div>
            </div>
        </div>
    )
}
