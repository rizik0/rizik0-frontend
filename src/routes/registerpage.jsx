import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import '../scss/stlyes.scss'
import Register from '../components/Register/Register.jsx'

export default function RegisterPage(){
    return(
        <>
            <Navbar id="Navbar"/>
            <Register id="Register"/>
            <Footer id="Footer"/>
        </>
    )
}