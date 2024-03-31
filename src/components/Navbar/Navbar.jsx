import './Navbar.scss'
import { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkRouter, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_circle.png'


export default function Navbar(){

    const location = useLocation();

    const handleRulesClick = (event) => {
        setTimeout(() => {
            event.preventDefault();
            const gameRulesElement = document.getElementById('GameRules');
            gameRulesElement?.scrollIntoView({ behavior: 'smooth' });
        },300);
    }

    const isRoot = location.pathname === "/";
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
                            {isRoot ? (
                                <Link activeClass="navLinkActive" className="navElem nav-link mx-2" to="Leaderboard" spy={true} smooth={true} duration={800}>Home</Link>
                            ) : (
                                <LinkRouter className="navElem nav-link mx-2" to="/">Home</LinkRouter>
                            )}
                        </li>
                        <li className="long navElem nav-item">
                            {isRoot ? (
                                <Link activeClass="navLinkActive" className="nav-link mx-2" to="GameRules" spy={true} smooth={true} duration={800}>Rules</Link>
                            ) : (
                                <LinkRouter className="nav-link mx-2" onClick={handleRulesClick} to="/">Rules</LinkRouter>
                            )}
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link id='logoNav' className="nav-link mx-2" to='Carousel'>
                                <img src={logo} height="100" />
                            </Link>
                        </li>
                        <li className="navElem nav-item">
                            <LinkRouter className="nav-link mx-2" aria-selected='false' aria-controls='tab-pricing' to="/Tech">Tech</LinkRouter>
                        </li>
                        <li className="long navElem nav-item">
                            <LinkRouter className="nav-link mx-2" aria-selected='false' aria-controls='tab-aboutus' to="/AboutUs">About us</LinkRouter>
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

