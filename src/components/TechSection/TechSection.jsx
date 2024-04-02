import './TechSection.scss'

export default function TechSection(){
    return(
        <section id='TechSection'>
            <div className="container">
                <div className="row" style={{textAlign:'center',color:'black',paddingTop:'10em'}}>
                    <h1>TECH STACK</h1>
                    <small style={{paddingBottom:'2.6em'}}> (frontend to backend) </small>
                </div>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">React.js</h4>
                        <i class="fa-brands fa-react"></i>
                        </div>
                        <p className="mb-1">We choose React as it allowed us to make our website to be dynamic.</p>
                    </a>
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">Vite</h4>
                        <i class="fa-brands fa-vine"></i>
                        </div>
                        <p className="mb-1">Vite was our choice because <em>create-react-app</em> has been deprecated recently.</p>
                    </a>
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">Python flask</h4>
                        <i class="fa-brands fa-python"></i>
                        </div>
                        <p className="mb-1">We used Python and Flask for our backend. It proved to be more flexible than its MVC counterparts, like <em>Ruby on Rails</em>. Those would have been far too cumbersome to handle the complex mechanics of the game.  </p>
                    </a>
                    <a className="list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex justify-content-between">
                        <h4 className="mb-1">SQL</h4>
                        <i class="fa-solid fa-database"></i>
                        </div>
                        <p className="mb-1">SQL was our natural choice because we are all familiar with it. It allowed us to handle the creation and usage of accounts with ease.</p>
                    </a>
                </div>
            </div>
        </section>
    )
}