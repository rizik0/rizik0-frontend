import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import Carousel from '../components/Carousel/Carousel.jsx'

export default function LobbyPage(UserColor){
    return(
        <div style={{backgroundColor:'#151F2B',height:'100vh'}}>
            <div class="container">
                <div class="row">
                    <Navbar id="Navbar"/>
                </div>
                <div class="row" style={{textAlign:'center',color:'white',paddingTop:'10em'}}>
                    Aspettando altri giocatori...
                </div>
            </div>
        </div>
    )
}