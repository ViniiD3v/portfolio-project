import './NavBar.css'
import Logo from '../../assets/V-removebg-preview.png'

function NavBar() {
    return (
        <div className="nav-bar d-md-flex px-5 mt-md-4">
            <div className="nav-container d-md-flex container-fluid ">
                <div className='logo'>
                    <img src={Logo} alt="logo VN" />
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-links d-flex justify-content-end w-100">
                    <div className='d-md-flex gap-4 align-items-center px-5'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Skills</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar