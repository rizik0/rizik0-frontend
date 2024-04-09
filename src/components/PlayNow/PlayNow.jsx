import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_circle.png'
import logo_square from '../../assets/logo_full.png'
import './PlayNow.scss'
import { Modal } from 'bootstrap';

export default function PlayNow(){

    const newModalRef = useRef();
    const joinModalRef = useRef();

    const [name, setName] = useState('')
    const [game_id, setGameId] = useState('')
    const navigate = useNavigate()

    const createGame = () => {
        const modalInstance = Modal.getInstance(newModalRef.current)
        modalInstance.hide()
        const abortController = new AbortController()
        console.log(name)
        const fetchData = async() => await fetch('http://localhost:3000/api/game/create', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({player_id: name})
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {localStorage.setItem('game_id', ob.data.game_id); localStorage.setItem('player_id', name); localStorage.setItem('playerGoal', ob.data.playerGoal);})

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
        const fetchData = async() => await fetch('http://localhost:3000/api/game/join', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({player_id: name, game_id: game_id})
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {localStorage.setItem('playerGoal', ob.data.playerGoal);})
            // .then(ob => {localStorage.setItem('game_id', ob.data.game_id); localStorage.setItem('player_id', name);})

        fetchData()   
        
        localStorage.setItem('game_id', game_id)
        localStorage.setItem('player_id', name)

        navigate('/lobby')
        
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
                        <div className="playButton" data-bs-toggle="modal" data-bs-target="#newModal">
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

            <div className="modal fade" id="newModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={newModalRef}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create a game!</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label for="recipient-name" className="col-form-label">Your Name</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={(s) => setName(s.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={createGame}>Play</button>
                                </div>
                            </div>
                        </div>
                    </div>


            <div className="modal fade" id="joinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={joinModalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Join a game!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label for="recipient-name" className="col-form-label">Your Name</label>
                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setName(s.target.value)} />
                            <label for="recipient-name" className="col-form-label">Match Code</label>
                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setGameId(s.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={joinGame}>Play</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sectionDivider'></div>
        </section>

    )
}




