import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import '../scss/stlyes.scss'
import TechSection from '../components/TechSection/TechSection.jsx'

export default function TechPage(){
    return(
        <>
            <Navbar id="Navbar"/>
            <TechSection id="TechSection"/>
            <Footer id="Footer"/>
        </>
    )
}