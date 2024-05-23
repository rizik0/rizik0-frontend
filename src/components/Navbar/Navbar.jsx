import './Navbar.scss'
import { Link } from 'react-scroll'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import logo from '../../assets/logo_circle.png'
import profileLogo from '../../assets/avatarIcon.png'
import { jwtDecode } from "jwt-decode"



export default function Navbar(){

    const location = useLocation();

    const handleRulesClick = (event) => {
        setTimeout(() => {
            event.preventDefault();
            const gameRulesElement = document.getElementById('GameRules');
            gameRulesElement?.scrollIntoView({ behavior: 'smooth' });
        },300);
    }
    
    const user = localStorage.getItem('jwt') !== null ? true : false;
    const decoded = user ? jwtDecode(localStorage.getItem('jwt')) : null;

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
                
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto align-items-center">
                            <li className="nav-item">
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
                                <LinkRouter className="nav-link mx-2" aria-selected='false' aria-controls='tab-pricing' to="/tech">Tech</LinkRouter>
                            </li>
                            <li className="long navElem nav-item">
                                <LinkRouter className="nav-link mx-2" aria-selected='false' aria-controls='tab-aboutus' to="/about_us">About us</LinkRouter>
                            </li>
                            {user ? (
                                    <div className='align-items-center profileSection' >
                                        <li className='nav-item profileGreet'>Welcome, {decoded.sub.username}</li>
                                        <li className='nav-item profileLogo'>
                                            <LinkRouter className="nav-link mx-2" aria-selected='false' aria-controls='tab-contactus' to="/profile">
                                                <img className='profilePic' src={profileLogo} />
                                            </LinkRouter>
                                        </li>
                                    </div>
                                ) : (
                                    <div className='align-items-center profileSection'>
                                        <li className='nav-item profileLogo'>
                                            <LinkRouter className="nav-link mx-2" aria-selected='false' aria-controls='tab-contactus' to="/login">
                                                <img className='profilePic' src={profileLogo} />
                                            </LinkRouter>
                                        </li>
                                    </div>
                                )}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

