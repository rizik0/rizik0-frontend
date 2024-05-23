import React, {useEffect, useState} from 'react'
import './Register.scss'
import {useNavigate} from "react-router-dom";
import { Link as LinkRouter} from 'react-router-dom'
import soldier from "../../assets/soldier.png";


export default function Register(){
    const [player, setPlayer] = useState({
        username: '',
        email: '',
        password_hash: ''
    })

    const navigate = useNavigate()

    if (localStorage.getItem('jwt') !== null) {
        alert("DEVI PRIMA FARE LOGOUT")
        return
    } else {
        const submit = e => {
            e.preventDefault()
            let status = {success: ''};

            fetch('http://localhost:3000/api/player/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([ player.username, player.email, player.password_hash ])
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        status.success = true;
                    } else {
                        status.success = false;
                    }
                });

            setTimeout(() => {
                if (status.success) {
                    navigate('/login')
                } else {
                    alert("Registration failed. Try again.")
                }
            }, 1000)


        }
        return (
            <section className="Register">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div id="soldier" className="col-md-3 col-lg-3 col-xl-3">
                            <img src={soldier} />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submit}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Username</label>
                                    <input onChange={e => setPlayer({...player, username: e.target.value})} required={true} type="text" id="form3Example2" className="form-control form-control-lg"
                                        placeholder="Enter a new username" />
                                </div>
    
                                <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email</label>
                                    <input onChange={e => setPlayer({...player, email: e.target.value})} required={true} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter an existing email" />
                                </div>
    
                                <div data-mdb-input-init className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input onChange={e => setPlayer({...player, password_hash: e.target.value})} required={true} type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>
    
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button id="registerButton" type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                                        Register
                                    </button>
                                    <p className="fw-bold mt-2 pt-1 mb-0"> 
                                        Already have an account?
                                        <LinkRouter id="loginLink" aria-selected='false' aria-controls='tab-pricing' to="/login"> Login</LinkRouter>
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