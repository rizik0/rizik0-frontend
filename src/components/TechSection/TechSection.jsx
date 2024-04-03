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
                                <div className='col-9'>
                                    <div >REACT</div>
                                </div>
                                <div className='col-2 text-end'> 
                                    <i class="fa-brands fa-react"></i>
                                </div>
                                <p className="mb-1">We choose React as it allowed us to make our website to be dynamic.</p>
                            </div>
                        </div>
                    </div>
                    <div className='TechContainer container'>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div className='col-9'>
                                    <div >VITE</div>
                                </div>
                                <div className='col-2 text-end'> 
                                    <i class="fa-brands fa-vine"></i>
                                </div>
                                <p className="mb-1">Vite was our choice because <em>create-react-app</em> has been deprecated recently.</p>
                            </div>
                        </div>
                    </div>
                    <div className='TechContainer container'>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div className='col-9'>
                                    <div >Python flask</div>
                                </div>
                                <div className='col-2 text-end'> 
                                    <i class="fa-brands fa-python"></i>
                                </div>
                                <p className="mb-1">We used Python and Flask for our backend. It proved to be more flexible than its MVC counterparts, like <em>Ruby on Rails</em>. Those would have been far too cumbersome to handle the complex mechanics of the game.  </p>
                            </div>
                        </div>
                    </div>
                    <div className='TechContainer container' style={{ marginBottom: '110px' }}>
                        <div className='container'> 
                            <div className='row techTitle'>
                                <div className='col-9'>
                                    <div >SQL</div>
                                </div>
                                <div className='col-2 text-end'> 
                                    <i class="fa-solid fa-database"></i>
                                </div>
                                <p className="mb-1">SQL was our natural choice because we are all familiar with it. It allowed us to handle the creation and usage of accounts with ease.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}