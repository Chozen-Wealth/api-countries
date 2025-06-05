import Card from "../components/Card";


export default function Home({data, setData}) {


    
    return(
        <div className='Home'>
            <div className="allPays">
                {data ? (data.map(element => (
                    <Card drapeau={element.flags.png} pays={element.name.common} population={element.population} region={element.region} capital={element.capital} />
                ))) : "Loading..."}
            </div>
        </div>
    )
}
