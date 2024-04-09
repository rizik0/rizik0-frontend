import { left } from '@popperjs/core'
import './TechSection.scss'

export default function TechSection(){
    return(
        <section id='TechSection'>
            <div class="container">
                <div className='row'>
                    <div className='techIntro col-12 text-center'>
                        Tech Stack 
                    </div>
                </div>
                
                <div className='row'>
                    <div className='TechContainer container'>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div style={{backgroundColor:'#ADD8E6'}} className='col-1 justify-content-center iconWrapper'> 
                                    <i class="fa-brands fa-react"></i>
                                </div>
                                <div className='col-9 justify-content-left'>
                                    <div className='techName'> REACT </div>
                                    <div className='row'>
                                        <p className="mb-1">We choose React as it allowed our website to be dynamic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='TechContainer container'>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div style={{backgroundColor:'#A020F0'}} className='col-1 justify-content-center iconWrapper'> 
                                    <i class="fa-brands fa-vine"></i>
                                </div>
                                <div className='col-9 justify-content-left'>
                                    <div className='techName' >VITE</div>
                                    <div className='row'>
                                        <p className="mb-1">Vite was our choice because <em>create-react-app</em> has been deprecated recently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='TechContainer container'>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div style={{backgroundColor:'#FFFF00'}} className='col-1 justify-content-center iconWrapper'> 
                                    <i class="fa-brands fa-python"></i>
                                </div>
                                <div className='col-9 justify-content-left'>
                                    <div className='techName'>Python</div>
                                    <div className='row'>
                                    <p className="mb-1">We used Python and Flask for our backend. It proved to be more flexible than its MVC counterparts, like <em>Ruby on Rails</em>. Those would have been far too cumbersome to handle the complex mechanics of the game.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='TechContainer container'>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div style={{backgroundColor:'#FF5733'}} className='col-1 justify-content-center iconWrapper'> 
                                    <i class="fa-solid fa-database"></i>
                                </div>
                                <div className='col-9 justify-content-left'>
                                    <div className='techName'>SQL</div>
                                    <div className='row'>
                                    <p className="mb-1">SQL was our natural choice because we are all familiar with it. It allowed us to handle the creation and usage of accounts with ease.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}