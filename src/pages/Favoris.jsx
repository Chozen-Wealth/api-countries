import { useNavigate } from "react-router-dom";
import Card from "../components/Card";



export default function Favoris({data, favoris, setFavoris}) {

    const navigate = useNavigate()
    const favs = data.filter(element => favoris.includes(element.cca3))

    return(
        <div className='Favoris'>
            <div className="divRetour">
                <button onClick={()=>navigate('/')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>Back</button>
            </div>
            <div className="listeFavoris">

            {data ? favoris.length > 0 ? (favs.map(element => (
                <Card key={element.cca3} cca3={element.cca3} population={element.population} region={element.region} capital={element.capital} drapeau={element.flags.png} pays={element.name.common} favoris={favoris} setFavoris={setFavoris} drapeauAlt={element.flags.alt} />
            ))): "Pas de pays mis en favoris." : ""}
            </div>
        </div>
    )
}
