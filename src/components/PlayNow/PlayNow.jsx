import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_circle.png'
import logo_square from '../../assets/logo_full.png'
import './PlayNow.scss'
import { Modal } from 'bootstrap';
import { jwtDecode } from 'jwt-decode'
import apiBaseUrl from '../../../config.js'

export default function PlayNow(){

    const newModalRef = useRef();
    const joinModalRef = useRef();

    const [name, setName] = useState('')
    const [game_id, setGameId] = useState('')
    const navigate = useNavigate()

    const createGame = () => {
        
        const abortController = new AbortController()
        console.log(name)
        const fetchData = async() => await fetch(`${apiBaseUrl}/api/game/create`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}`},
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {localStorage.setItem('game_id', ob.data.game_id); localStorage.setItem('player_id', jwtDecode(localStorage.getItem('jwt')).sub.username); localStorage.setItem('playerGoal', ob.data.playerGoal); localStorage.setItem('player_color', ob.data.playerColor);})

        fetchData()   
        
        navigate('/lobby')
        return () => {
            abortController.abort()
        }
    }

    
    const joinGame = () => {
        const modalInstance = Modal.getInstance(joinModalRef.current);
        modalInstance.hide();
        const abortController = new AbortController()
        console.log(name)
        const fetchData = async() => await fetch(`${apiBaseUrl}/api/game/join`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({game_id: game_id})
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {
                console.log(ob)
                if (ob.data['error']) {
                    if (ob.data['error'] !== "Game not found") {
                        alert(ob.data['error'])
                    }       
                }
                else {
                    localStorage.setItem('playerGoal', ob.data.playerGoal);
                    localStorage.setItem('game_id', game_id)
                    localStorage.setItem('player_color', ob.data.playerColor)
                    localStorage.setItem('player_id', jwtDecode(localStorage.getItem('jwt')).sub.username)

                    navigate('/lobby')
                }
            })
            // .then(ob => {localStorage.setItem('game_id', ob.data.game_id); localStorage.setItem('player_id', name);})

        fetchData()   
        
        return () => {
            abortController.abort()
        }
    }
    
    return(
        <section id="PlayNow">
            <div className="playTitle">🎮 PLAY NOW 🎮</div>
            <div className="playContainer container">
                <div className=' row justify-content-md-center'>
                    <div className='col-12'>
                        <div className='playDescription'>
                            Risk is a classic strategic board game that challenges players to conquer the world through 
                            military conquest and tactical prowess. Risk is not merely a game of brute force; it requires 
                            careful planning and negotiation. Players must decide whether to expand aggressively, fortify 
                            their defenses, or form alliances with other players to achieve their objectives! Are you up to 
                            the challenge?
                        </div>
                    </div>
                </div>
                <div className='row justify-content-around'>
                    <div className='col-md-auto'>
                        <div onClick={localStorage.getItem('jwt') !=  null ? createGame : () => navigate('/login')} className="playButton" >
                            New Game
                        </div>
                    </div>
                    <div className='col-md-auto'>
                        <img className='playLogo' id="circle_logo" src={logo} alt="" />
                    </div>
                    <div className='col-md-auto'>
                        <div className="playButton" data-bs-toggle="modal" data-bs-target="#joinModal">
                            Join Game
                        </div>
                    </div>
                </div>
                <div className='row'>
                        <img id="square_logo" src={logo_square} alt="" />
                </div>
            </div>



            <div className="modal fade" id="joinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={joinModalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Join a game!</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label for="recipient-name" className="col-form-label">Match Code</label>
                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setGameId(s.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={localStorage.getItem('jwt') ? joinGame : () => {
                                const modalElement = document.getElementById('joinModal')
                                const modalInstance = Modal.getInstance(modalElement)
                                modalInstance.hide()
                                navigate('/login')
                            }}>Play</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sectionDivider'></div>
        </section>

    )
}




