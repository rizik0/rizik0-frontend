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
                                <div className="carousel-caption">
                                    <h5 className='capTitle'>Introduction and Strategy Hints</h5>
                                    <p id= "rules_text">In the classic “World Domination RISK®‘” game of military strategy, you are battling to conquer the world. To win, you must launch daring attacks, defend yourself on all fronts, and sweep across vast continents with boldness and cunning. But remember, the dangers, as well as the rewards, are high. Just when the world is within your grasp, your opponent might strike and take it all away!. Conquer whole continents, watch your enemies and fortify your borders.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">
                                        <img src={secondImg} className="carouselImage d-block align-middle h-40 w-100" ></img>
                                    </div>
                                <div className="carousel-caption">
                                    <h5 className='capTitle'>Setup</h5>
                                    <p id= "rules_text">Unlike most games, RISK demands careful planning before you actually start to play. After you get your territories, place your tanks strategically to fortify your defences and don't forget to plan your attacks! You can attack with a maximum of three troops and for each of those a dice will be rolled. Then the highest die rolled by you and the defender is compared. If yours is higher, the defender loses one troop and viceversa. In case of a tie, the defender wins. After defeating the last troop on a territory, you have captured it! Now you must occupy it with at least a troop.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={thirdImg} className="carouselImage d-block w-100" alt="..."></img>
                                <div className="carousel-caption">
                                    <h5 className='capTitle'>Fortifying your position and Winning</h5>
                                    <p id= "rules_text">You may end your attacks at any time. After doing so, you must fortify your positions. Move as many armies as you like between your territories! Don't forget to leave one behind. The winner is the first player to eliminate every opponent by capturing all territories on the board! </p>
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