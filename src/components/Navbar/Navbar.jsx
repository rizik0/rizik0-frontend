import './Navbar.scss'
import logo from '../../assets/logo_circle.png'


export default function Navbar(){

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark p-3" id="headerNav">
                    <div className="container-fluid">
                        <a className="navbar-brand d-block d-lg-none" href="#">
                            <img src={logo} height="80" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto align-items-center">
                            <li className="navElem nav-item">
                                <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="long navElem nav-item">
                                <a className="nav-link mx-2" href="#">Products</a>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                <a className="nav-link mx-2" href="#">
                                <img src={logo} height="80" />
                            </a>
                            </li>
                            <li className="navElem nav-item">
                                <a className="nav-link mx-2" href="#">Pricing</a>
                            </li>
                            <li className="long navElem nav-item">
                                <a className="nav-link mx-2" href="#">About us</a>
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
            </div>
        </>
    )
}


/* 


                <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Riziko</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>


*/