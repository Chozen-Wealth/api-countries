

export default function Card({population, region, capital, pays, drapeau}) {
    return(
        <div className="Card">
            <div className="cardTop">
                <img src={drapeau} alt="" />
            </div>
            <div className="cardBot">
                <span className="titre">{pays}</span>
                <div>
                    <span className="population">Population : {population}</span>
                    <span className="region">Region : {region}</span>
                    <span className="capital">Capital : {capital}</span>
                </div>
            </div>
        </div>
    )
}
