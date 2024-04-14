import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import '../scss/stlyes.scss'
import Logout from '../components/Logout/Logout.jsx'

export default function LogoutPage(){
    return(
        <>
            <Navbar id="Navbar"/>
            <Logout id="Logout"/>
            <Footer id="Footer"/>
        </>
    )
}