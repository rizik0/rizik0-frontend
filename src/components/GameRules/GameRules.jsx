import './GameRules.scss'
import firstImg from '../../assets/rules1.png'
import secondImg from '../../assets/rules2.png'
import thirdImg from '../../assets/rules3.jpg'


export default function Carousel() {

    return(
        <section id='GameRules'>
            <div className='ruleTitle'>📚 RULES 📚</div>
            <div className='container ruleContainer'>
                <div className='row'>
                    <div className='col'>
                        <div id="carouselLanding" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselLanding" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselLanding" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselLanding" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex justify-content-center">
                                        <img src={firstImg} className="carouselImage d-block rounded align-middle h-80 w-100" ></img>
                                    </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">
                                        <img src={secondImg} className="carouselImage d-block align-middle h-40 w-100" ></img>
                                    </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={thirdImg} className="carouselImage d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselLanding" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselLanding" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
                
            </div>
        
        
        
        </section>

    )

}