import './Navbar.scss'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll';
import logo from '../../assets/logo_circle.png'


export default function Navbar(){

    return(
        <section id='Navbar'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-3" id="headerNav">
                <div className="container-fluid">
                    <a className="navbar-brand d-block d-lg-none" href="#">
                        <img src={logo} height="80" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto align-items-center">
                        <li className=" nav-item">
                            <Link activeClass="navLinkActive" className="navElem nav-link mx-2" to="Carousel" spy={true} smooth={true} duration={800}>Home</Link>
                        </li>
                        <li className="long navElem nav-item">
                            <Link activeClass="navLinkActive" className="nav-link mx-2" to="Products" spy={true} smooth={true} duration={800}>Products</Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link id='logoNav' className="nav-link mx-2" to='Carousel'>
                                <img src={logo} height="100" />
                            </Link>
                        </li>
                        <li className="navElem nav-item">
                            <Link className="nav-link mx-2" aria-selected='false' aria-controls='tab-pricing' to="Pricing">Pricing</Link>
                        </li>
                        <li className="long navElem nav-item">
                            <Link className="nav-link mx-2" aria-selected='false' aria-controls='tab-aboutus' to="AboutUs">About us</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Company
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Blog</a></li>
                            <li><a className="dropdown-item" href="#">About Us</a></li>
                            <li><a className="dropdown-item" href="#">Contact us</a></li>
                        </ul>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

