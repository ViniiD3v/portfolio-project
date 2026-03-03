import './NavBar.css'
import Logo from '../../assets/VN-Logo.png'
import Collapse from "bootstrap/js/dist/collapse";


function NavBar() {

    const closeMenu = () => {
        const navbar = document.getElementById("navbarNav");
        const bsCollapse = Collapse.getInstance(navbar);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark mt-md-3">
            <div className="nav-container-custom container-fluid px-4">
                <a className="navbar-brand logo" href="#">
                    <img src={Logo} alt="logo VN" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav gap-4">
                        <a className="nav-link" href="#home" onClick={closeMenu}>Home</a>
                        <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
                        <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
                        <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
                        <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar