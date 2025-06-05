import { useState } from "react";
import Card from "../components/Card";


export default function Home({data, setData}) {

    const [selectedRegion, setSelectedRegion] = useState("")
    const [recherche, setRecherche] = useState("")

    const handleChange = (e) => {
        setSelectedRegion(e.target.value);
    }

    const dataRegion = data.filter(element => element.region.toLowerCase().includes(selectedRegion.toLowerCase()))
    const dataFiltre = dataRegion.filter(element => element.name.common.toLowerCase().includes(recherche.toLowerCase()))

    return(
        <div className='Home'>
            <div className="divFiltres">
                <div className="divInput">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    <input onChange={(e)=> setRecherche(e.target.value)} type="search" name="" id="" placeholder="Search for a country..."/>
                </div>
                <select name="" id="" value={selectedRegion} onChange={handleChange}>
                    <option value="" disabled hidden>Filter by Region</option>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className="allPays">
                {data ? (dataFiltre.map(element => (
                    <Card key={element.cca3} cca3={element.cca3} drapeau={element.flags.png} pays={element.name.common} population={element.population} region={element.region} capital={element.capital} />
                ))) : "Loading..."}
            </div>
        </div>
    )
}
