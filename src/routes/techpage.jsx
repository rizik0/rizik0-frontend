import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'

export default function TechPage(){
    return(
        <>
            <div class="container">
                    <div class="row">
                        <Navbar id="Navbar"/>
                    </div>
                    <div class="row" style={{textAlign:'center',color:'black',paddingTop:'10em'}}>
                        <h1>TECH STACK</h1>
                        <small style={{paddingBottom:'2.6em'}}> (da frontend a backend) </small>
                    </div>
                    <div class="list-group">
                        <a class="list-group-item list-group-item-action flex-column align-items-center">
                            <div class="d-flex justify-content-between">
                            <h4 class="mb-1">React.js</h4>
                            <small> icona react</small>
                            </div>
                            <p class="mb-1">Motivo per il quale abbiamo usato questo</p>
                        </a>
                        <a class="list-group-item list-group-item-action flex-column align-items-center">
                            <div class="d-flex justify-content-between">
                            <h4 class="mb-1">Vite</h4>
                            <small> icona vite</small>
                            </div>
                            <p class="mb-1">Motivo per il quale abbiamo usato questo</p>
                        </a>
                        <a class="list-group-item list-group-item-action flex-column align-items-center">
                            <div class="d-flex justify-content-between">
                            <h4 class="mb-1">Python flask</h4>
                            <small> icona python flask</small>
                            </div>
                            <p class="mb-1">Motivo per il quale abbiamo usato questo</p>
                        </a>
                        <a class="list-group-item list-group-item-action flex-column align-items-center">
                            <div class="d-flex justify-content-between">
                            <h4 class="mb-1">SQL</h4>
                            <small> icona SQL</small>
                            </div>
                            <p class="mb-1">Motivo per il quale abbiamo usato questo</p>
                        </a>
                        </div>
                    </div>
        </>
    )
}