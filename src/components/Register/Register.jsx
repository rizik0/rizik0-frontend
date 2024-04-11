import './Register.scss'
import soldier from "../../assets/soldier.png";


export default function Register(){
    return (
        <section className="Register">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div id="soldier" className="col-md-3 col-lg-3 col-xl-3">
                        <img src={soldier} />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Email</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter an existing email" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Username</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a new username" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">IMMAGINE PROFILO</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="IMMAGINE" />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button id="registerButton" type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                                    Register
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0"> 
                                    Already have an account?   
                                    <a href="#!" className="link-danger" id="loginLink">
                                        Login
                                    </a>
                                </p>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}