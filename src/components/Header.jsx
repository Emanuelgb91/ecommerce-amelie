import CartWidget from "./CartWidget"
import LogoAmelie from "./LogoAmelie"
import Navbar from "./Navbar"

const Header = () => {
    return (
    <header>
        <LogoAmelie/>
        <Navbar/>
        <CartWidget/>
    </header>
    )
}

export default Header