import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import RiskBoard from '../components/RiskBoard/RiskBoard.jsx'
import * as bootstrap from 'bootstrap'


export default function GamePage({UserColor}){
    return(
        <div style={{backgroundColor:'#151F2B',height:'100vh'}}>  
            <div class="container" style={{paddingTop:'10em'}}>
                <div class = "row">
                    <Navbar id="Navbar"/>
                </div>
                <div class = "row">
                    <div class = "col" style={{textAlign:'center',color:UserColor}}>
                        Turno di:   $USER
                    </div>
                    <div class = "col" style={{textAlign:'center',color:UserColor}}>
                        10:25
                    </div>
                </div>
                <div class="row" >
                    <RiskBoard id="RiskBoard"/>
                </div>
                <div class="row" style={{textAlign:'center',color:UserColor}}>
                    OBIETTIVO
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary" id="end-turn-button" style={{backgroundColor:UserColor}}>
                        Termino Attacchi
                    </button>
                </div>
                
            </div>
            
        </div>
    )
}