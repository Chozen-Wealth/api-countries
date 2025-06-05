import { useParams } from "react-router-dom"


export default function Details({data}) {
    const {pays} = useParams()

    const pays_local = data.find(el=>el.name.common.trim().toLowerCase() === pays)

    return(
        <div className='Details'>
            
        </div>
    )
}
