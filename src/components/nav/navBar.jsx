import CartWidget from "../cardtWidget/cartWidget"
import Toggle from "../toggle/toggle"

//objetivo : crear el menú e-comerce de tu proyecto
const NavBar = () => {
    return (
        <>
        <nav className="navBar">
            <section className="contenedorLogo">
                <a className="logotipo" href="#">
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino03_cnrawx.gif" alt="logotipo pinguino" />
                </a>
                <span>pinguiShop</span>
            </section>
            <section className="menuAndCar">
                <ul className="listMenu">
                    <li><a >home</a></li>
                    <li><a >nosotros</a></li>
                    <li><a >contacto</a></li>
                </ul>
                <CartWidget />
            </section>
            
            <Toggle />
        </nav>
        </>
    )
}

export default NavBar