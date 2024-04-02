import './TechSection.scss'

export default function TechSection(){
    return(
        <section id='TechSection'>
            <div className="container">
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
        </section>
    )
}