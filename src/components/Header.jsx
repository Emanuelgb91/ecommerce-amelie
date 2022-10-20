import CartWidget from "./CartWidget"
import Navbar from "./Navbar"

const Header = () => {
    return (
    <header className="containerHeader">
        <div>
            <img src="Amelie.png" alt="Logo Negocio" />
        </div>
        <Navbar/>
        <CartWidget/>
    </header>
    )
}

export default Header