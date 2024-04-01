import Navbar from '../components/Navbar/Navbar.jsx'
import './aboutus.scss'
import cristian from '../assets/cristian.jpg'
import federico from '../assets/federico.png'
import pietro from '../assets/pietro.jpeg'

export default function AboutUs(){
    return(
        <section id='AboutUs'>
            <Navbar id="Navbar"/>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col rounded divider'></div>
                    <div className='col'>
                        <div className="teamTitle display-5 text-center">TEAM</div>
                    </div>
                    <div className='col rounded divider'></div>
                </div>
            </div>

            <div className="subName mb-5 text-center lead fs-4">Riziko</div>
            <div className="container aboutusContainer">

                <div className="row">
                    <section className="test mb-8 py-xl-8">
                        <div className="container">
                            <div className="row gy-4 gy-lg-0 gx-xxl-5">
                                <div className="col-4 col-md-6 col-lg-4">
                                    <div className="teamCard card border-2 border-bottom border-primary shadow-bg">
                                        <div className="card-body p-0">
                                            <figure className="m-0 p-0">
                                                <img className="img-fluid team-image " loading="lazy" src={cristian} alt="cristian" />
                                                <figcaption className="cardCaption m-0 p-4">
                                                    <h4 className="mb-1">Cristian Di Iorio</h4>
                                                    <p className="text-secondary mb-1">Studente terzo anno ingegneria informatica</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 col-md-6 col-lg-4">
                                    <div className="teamCard card border-2 border-bottom border-primary shadow-bg">
                                        <div className="card-body p-0">
                                            <figure className="m-0 p-0">
                                            <img className="img-fluid team-image" loading="lazy" src={federico} alt="federico"/>
                                                <figcaption className="cardCaption m-0 p-4">
                                                    <h4 className="mb-1">Federico Gerardi</h4>
                                                    <p className="text-secondary mb-1">Studente terzo anno ingegneria informatica</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 col-md-6 col-lg-4">
                                    <div className="teamCard card border-2 border-bottom border-primary shadow-sm overflow-hidden">
                                        <div className="card-body p-0">
                                            <figure className="m-0 p-0">
                                                <img className="img-fluid team-image" loading="lazy" src={pietro} alt="pietro"/>
                                                <figcaption className="cardCaption m-0 p-4">
                                                    <h4 className="mb-1">Pietro Costanzi Fantini</h4>
                                                    <p className="text-secondary mb-1">Studente terzo anno ingegneria informatica</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}