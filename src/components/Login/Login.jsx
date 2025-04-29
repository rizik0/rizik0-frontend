import React, {useState} from 'react'
import './Login.scss'
import { Link } from 'react-scroll'
import { Link as LinkRouter} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import soldier from "../../assets/soldier.png";
import apiBaseUrl from '../../config.js'


export default function Login(){
    const [player, setPlayer] = useState({
        username: '',
        password_hash: ''
    })

    const navigate = useNavigate()

    if (localStorage.getItem('jwt') !== null) {
        return alert('devi prima effettuare il logout')
    } else {
        const submit = e => {
            e.preventDefault()

            console.log('player',player)
            fetch('${apiBaseUrl}/api/player/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([player.username, player.password_hash])
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        localStorage.setItem('jwt', data.jwt)
                    } else {
                        localStorage.removeItem('jwt')
                    }
                });

            setTimeout(() => {
                if (localStorage.getItem('jwt') !== null) {
                    navigate('/profile')
                }
                else {
                    alert("Login failed. Try again.")
                }
            }, 1000)
        }
    return (
        <section className="Login">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div id="soldier" className="col-md-3 col-lg-3 col-xl-3">
                        <img src={soldier} />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={submit}>

                            <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Username</label>
                                <input onChange={e => setPlayer({...player, username: e.target.value})} required={true} type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a registered username" />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input onChange={e => setPlayer({...player, password_hash: e.target.value})} required={true} type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button id="loginButton" type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                                    Login
                                </button>
                                <p className="fw-bold mt-2 pt-1 mb-0"> 
                                    Don't have an account?   
                                    <LinkRouter id="registerLink" aria-selected='false' aria-controls='tab-pricing' to="/register"> Register</LinkRouter>
                                </p>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
}