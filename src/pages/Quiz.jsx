import { useEffect } from "react"

export default function Quiz({data}){
    const listePays = data?.map(el => el.name.common)

    useEffect(()=>{
        const question = listePays
    },[listePays])

    return(
        <section id="quiz">
            <form action="quiz">
                <label htmlFor=""></label>
            </form>
        </section>
    )
}