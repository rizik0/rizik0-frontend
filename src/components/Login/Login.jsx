import './Login.scss'
import soldier from "../../assets/soldier.png";


export default function Login(){
    return (
        <section className="Login">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div id="soldier" className="col-md-3 col-lg-3 col-xl-3">
                        <img src={soldier} />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Username</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a registered username" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button id="loginButton" type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0"> 
                                    Don't have an account?   
                                    <a href="#!" className="link-danger" id="registerLink">
                                        Register
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