export default function Quiz({data}){
    const listePays = data.map(el => el.name.common)
    const region =  data.map(el=>el)

    return(
        <section id="quiz">
            <form action="quiz">
                <label htmlFor=""></label>
            </form>
        </section>
    )
}