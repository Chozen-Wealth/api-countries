import { useNavigate, useParams } from "react-router-dom"


export default function Details({data}) {
    const {pays} = useParams()
    const navigate = useNavigate()

    const pays_local = data.find(el=>el.cca3 === pays)

    return(

        <section id="details">
            <div>
                <button onClick={()=>navigate('/')}>Back</button>
            </div>
            <div>
                <div>
                    <img src={pays_local.flags.svg} alt={pays_local.flags.alt} />
                </div>
                <div>
                    <h2>{pays_local.name.common}</h2>
                    <div>
                        <p>Native Name: <span>{pays_local.name.common}</span></p>
                        <p>Population: <span>{pays_local.population}</span></p>
                        <p>Region: <span>{pays_local.region}</span></p>
                        <p>Sub Region: <span>{pays_local.subregion}</span></p>
                        <p>Capital: <span>{pays_local.capital}</span></p>
                        <p>Top Level Domain: <span>{pays_local.tld}</span></p>
                        <p>Currencies: <span>{pays_local.currencies.name}</span></p>
                        <p>Languages: <span>{pays_local.languages.mkd}</span></p>
                    </div>
                    <div>
                        <label htmlFor="">Border Countries</label>
                        {pays_local.border.map(el=>(
                            <button>{el}</button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
