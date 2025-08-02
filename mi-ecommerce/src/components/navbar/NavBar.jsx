import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#444',
                padding: '1rem',
                color: 'white'
            }}
        >
            <h1 style={{ fontSize: '1.5rem' }}>Mi Tienda</h1>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '1rem',
                    margin: 0,
                    padding: 0
                }}
            >
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;