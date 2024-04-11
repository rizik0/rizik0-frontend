import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import '../scss/stlyes.scss'
import Login from '../components/Login/Login.jsx'

export default function LoginPage(){
    return(
        <>
            <Navbar id="Navbar"/>
            <Login id="Login"/>
            <Footer id="Footer"/>
        </>
    )
}