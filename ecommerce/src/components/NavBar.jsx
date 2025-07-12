import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header className="navbar">
            <h1>Ecommerce</h1>
            <nav className="nav-links">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar