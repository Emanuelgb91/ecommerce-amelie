import ItemListContainer from "./ItemListContainer"

const Main = ({greeting}) => {
    return(
        <main>
            <h1>{greeting}</h1>
            <ItemListContainer/>
        </main>

    )
}
export default Main