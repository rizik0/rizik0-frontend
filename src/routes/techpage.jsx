import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import '../scss/stlyes.scss'

export default function TechPage(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <Navbar id="Navbar"/>
                </div>
                <div className="row" style={{textAlign:'center',color:'black',paddingTop:'10em'}}>
                    <h1>TECH STACK</h1>
                    <small style={{paddingBottom:'2.6em'}}> (da frontend a backend) </small>
                </div>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">React.js</h4>
                        <small> icona react</small>
                        </div>
                        <p className="mb-1">Motivo per il quale abbiamo usato questo</p>
                    </a>
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">Vite</h4>
                        <small> icona vite</small>
                        </div>
                        <p className="mb-1">Motivo per il quale abbiamo usato questo</p>
                    </a>
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">Python flask</h4>
                        <small> icona python flask</small>
                        </div>
                        <p className="mb-1">Motivo per il quale abbiamo usato questo</p>
                    </a>
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">SQL</h4>
                        <small> icona SQL</small>
                        </div>
                        <p className="mb-1">Motivo per il quale abbiamo usato questo</p>
                    </a>
                </div>
            </div>
            <div className="row">
                <Footer id="Footer"/>
            </div>
        </>
    )
}