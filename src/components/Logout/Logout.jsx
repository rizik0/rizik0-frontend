import React, {useState} from 'react'
import './Logout.scss'
import { Link as LinkRouter} from 'react-router-dom'
import soldier from "../../assets/soldier.png";


export default function Logout(){
    localStorage.removeItem('jwt')

    return (
        <section className="Logout">
            <div className="container-fluid">
                <div className="col justify-content-center align-items-center">
                    <div id="soldier" className="row-md4 justify-content-center text-center align-items-center">
                        <img src={soldier} alt="soldier" className="img-fluid" />
                    </div>
                    <div className="row justify-content-center text-center align-items-center">
                        <h1>Logout</h1>
                        <p>Sei stato disconnesso correttamente</p>
                        <LinkRouter to="/login">
                            <button id="loginButton" className="btn btn-primary">Login</button>
                        </LinkRouter>
                    </div>
                </div>
            </div>
        </section>
    )
}
