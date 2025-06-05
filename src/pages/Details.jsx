import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Details({data}) {
    const {pays} = useParams()
    const navigate = useNavigate()
    const pays_local = data.find(el=>el.cca3 === pays)
    
    // pays_local?.borders.forEach(el => {
    //     const border = data.find(el2=>el2.cca3 === el)
    //     setPays_local({...pays_local,el:border.name})
    // });
    
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
                                <button key={el} onClick={()=>navigate(`/details/${el}`)}>{el}</button>
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
