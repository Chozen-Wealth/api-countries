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
                <div className="divRetour">
                    <button onClick={()=>navigate('/')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>Back</button>
                </div>
                <div className="divDetails">
                    <div className="divImg">
                        <img src={pays_local.flags.svg} alt={pays_local.flags.alt} />
                    </div>
                    <div className="divDetailsInfos">
                        <h2>{pays_local.name.common}</h2>
                        <div className="detailsInfos">
                            <div className="detailsInfosGauche">
                                <p><b>Native Name:</b> <span>{pays_local.name.common}</span></p>
                                <p><b>Population:</b> <span>{pays_local.population}</span></p>
                                <p><b>Region:</b> <span>{pays_local.region}</span></p>
                                <p><b>Sub Region:</b> <span>{pays_local.subregion}</span></p>
                                <p><b>Capital:</b> <span>{pays_local.capital}</span></p>
                            </div>
                            <div className="detailsInfosDroite">
                                <p><b>Top Level Domain:</b> <span>{pays_local.tld}</span></p>
                                <p><b>Currencies:</b> <span>{pays_local.currencies.name}</span></p>
                                <p><b>Languages:</b> <span>{pays_local.languages.mkd}</span></p>
                            </div>
                        </div>
                        <div className="divBorders">
                            <label htmlFor=""><b>Border Countries : </b></label>
                            {pays_local.borders.map(el=>(
                                <button className="btnBorders" key={el} onClick={()=>navigate(`/details/${el}`)}>{el}</button>
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
