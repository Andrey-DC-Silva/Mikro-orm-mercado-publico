import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1>
                    <FaShoppingCart style={{ marginRight: 8 }} />
                    MIKRO SUPERMERCADO
                </h1>
            </div>
        </nav>
    );
}