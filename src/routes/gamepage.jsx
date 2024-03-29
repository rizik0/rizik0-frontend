import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import RiskBoard from '../components/RiskBoard/RiskBoard.jsx'

export default function GamePage(){
    return(
        <>
            <div class="container" style={{marginTop:'10em',textAlign:'center'}}>
                <div class = "row">
                    <Navbar id="Navbar"/>
                </div>
                <div class = "row" style={{marginLeft:'14em'}}>
                    <RiskBoard id="RiskBoard"/>
                </div>
            </div>
            
        </>
    )
}