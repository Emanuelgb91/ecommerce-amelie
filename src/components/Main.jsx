import ItemListContainer from "./ItemListContainer"

const Main = ({saludo}) => {
    return(
        <main>
            <h1>{saludo}</h1>
            <ItemListContainer/>
        </main>

    )
}
export default Main