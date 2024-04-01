import Navbar from '../components/Navbar/Navbar.jsx'
import './aboutus.scss'
import cristian from '../assets/cristian.jpg'
import federico from '../assets/federico.png'
import pietro from '../assets/pietro.jpeg'

export default function TechPage(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <Navbar id="Navbar"/>
                </div>
                <div className="row" style={{paddingTop:'15em'}}>
                    <section className="bg-light py-3 py-md-5 py-xl-8">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                    <h2 className="mb-4 display-5 text-center">IL TEAM</h2>
                                    <p className="text-secondary mb-5 text-center lead fs-4">Progetto di LTW</p>
                                    <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
                                </div>
                            </div>
                        </div>

                        <div className="container overflow-hidden">
                            <div className="row gy-4 gy-lg-0 gx-xxl-5">
                                <div className="col-4 col-md-6 col-lg-4">
                                    <div className="card border-2 border-bottom border-primary shadow-sm overflow-hidden">
                                        <div className="card-body p-0">
                                            <figure className="m-0 p-0">
                                                <img className="img-fluid team-image " loading="lazy" src={cristian} alt="cristian" />
                                                <figcaption className="m-0 p-4">
                                                    <h4 className="mb-1">Cristian Di Iorio</h4>
                                                    <p className="text-secondary mb-1">Studente terzo anno ingegneria informatica</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 col-md-6 col-lg-4">
                                    <div className="card border-2 border-bottom border-primary shadow-sm overflow-hidden">
                                        <div className="card-body p-0">
                                            <figure className="m-0 p-0">
                                            <img className="img-fluid team-image" loading="lazy" src={federico} alt="federico"/>
                                                <figcaption className="m-0 p-4">
                                                    <h4 className="mb-1">Federico Gerardi</h4>
                                                    <p className="text-secondary mb-1">Studente terzo anno ingegneria informatica</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 col-md-6 col-lg-4">
                                    <div className="card border-2 border-bottom border-primary shadow-sm overflow-hidden">
                                        <div className="card-body p-0">
                                            <figure className="m-0 p-0">
                                                <img className="img-fluid team-image" loading="lazy" src={pietro} alt="pietro"/>
                                                <figcaption className="m-0 p-4">
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
            
        </>
    )
}