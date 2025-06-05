import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Details({data}) {
    const {pays} = useParams()
    const navigate = useNavigate()
    const [pays_local, setPays_local] = useState()
    
    useEffect(() => {
        const country = data.find(el => el.cca3 === pays);
        if (!country) return;

        const borderCountries = country.borders?.map(code => {
            return { cca3: code ,name: data.find(el2 => el2.cca3 === code).name.common};
        }).filter(Boolean);

        setPays_local({
            ...country,
            borders: borderCountries || []
        });
    }, [data, pays]);
    console.log(pays_local);
    
    
    
    
    
    return(

        <section id="details">
            {pays_local
            ?(
                <>
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
                            {pays_local.borders.map(el=>(
                                <button key={el.cca3} onClick={()=>navigate(`/details/${el.cca3}`)}>{el.name}</button>
                            ))}
                        </div>
                    </div>
                </div>
                </>
                )
                :<p>chargement</p>
            }
        </section>
    )
}
