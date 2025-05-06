import React, {useEffect, useState} from 'react'
import './Register.scss'
import {useNavigate} from "react-router-dom";
import { Link } from 'react-scroll'
import { Link as LinkRouter} from 'react-router-dom'
import soldier from "../../assets/soldier.png";
import apiBaseUrl from '../../../config.js'
import PasswordStrengthMeter from './PasswordStrengthMeter' // Import the new component

export default function Register(){
    const [player, setPlayer] = useState({
        username: '',
        email: '',
        password_hash: ''
    })
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Function to validate password before submission
    const validatePassword = (password) => {
        if (password.length < 8) {
            return { valid: false, message: "Password must be at least 8 characters long" };
        }
        
        if (!/[A-Z]/.test(password)) {
            return { valid: false, message: "Password must contain at least one uppercase letter" };
        }
        
        if (!/[a-z]/.test(password)) {
            return { valid: false, message: "Password must contain at least one lowercase letter" };
        }
        
        if (!/\d/.test(password)) {
            return { valid: false, message: "Password must contain at least one number" };
        }
        
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return { valid: false, message: "Password must contain at least one special character" };
        }
        
        return { valid: true, message: "" };
    };

    const navigate = useNavigate()

    if (localStorage.getItem('jwt') !== null) {
        alert("DEVI PRIMA FARE LOGOUT")
        return
    } else {
        const submit = e => {
            e.preventDefault()
            setError('');
            setIsSubmitting(true);
            
            // Validate password before submission
            const passwordValidation = validatePassword(player.password_hash);
            if (!passwordValidation.valid) {
                setError(passwordValidation.message);
                setIsSubmitting(false);
                return;
            }
            
            let status = {success: ''};

            fetch(`${apiBaseUrl}/api/player/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([ player.username, player.email, player.password_hash ])
            })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(data => {
                            throw new Error(data.error || "Registration failed");
                        });
                    }
                    return res.json();
                })
                .then(data => {
                    if (data) {
                        status.success = true;
                    } else {
                        status.success = false;
                    }
                })
                .catch(err => {
                    setError(err.message);
                    status.success = false;
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsSubmitting(false);
                        if (status.success) {
                            navigate('/login');
                        } else if (!error) {
                            setError("Registration failed. Try again.");
                        }
                    }, 1000);
                });
        }
        
        return (
            <section className="Register">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div id="soldier" className="col-md-3 col-lg-3 col-xl-3">
                            <img src={soldier} alt="Soldier" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <form onSubmit={submit}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Username</label>
                                    <input 
                                        onChange={e => setPlayer({...player, username: e.target.value})} 
                                        required={true} 
                                        type="text" 
                                        id="form3Example2" 
                                        className="form-control form-control-lg"
                                        placeholder="Enter a new username" 
                                    />
                                </div>
    
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email</label>
                                    <input 
                                        onChange={e => setPlayer({...player, email: e.target.value})} 
                                        required={true} 
                                        type="email" 
                                        id="form3Example3" 
                                        className="form-control form-control-lg"
                                        placeholder="Enter an existing email" 
                                    />
                                </div>
    
                                <div data-mdb-input-init className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input 
                                        onChange={e => setPlayer({...player, password_hash: e.target.value})} 
                                        required={true} 
                                        type="password" 
                                        id="form3Example4" 
                                        className="form-control form-control-lg"
                                        placeholder="Enter password" 
                                    />
                                    {/* Add the password strength meter component */}
                                    <PasswordStrengthMeter password={player.password_hash} />
                                </div>
    
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button 
                                        id="registerButton" 
                                        type="submit" 
                                        data-mdb-button-init 
                                        data-mdb-ripple-init 
                                        className="btn btn-primary btn-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Registering...' : 'Register'}
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