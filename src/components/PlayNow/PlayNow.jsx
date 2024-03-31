import { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

export default function PlayNow(){

    const [name, setName] = useState('')
    const [game_id, setGameId] = useState('')
    const navigate = useNavigate()

    const createGame = () => {
        const abortController = new AbortController()
        console.log(name)
        const fetchData = async() => await fetch('http://localhost:3000/api/game/create', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({player_id: name})
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {localStorage.setItem('game_id', ob.data.game_id); localStorage.setItem('player_id', name);})

        fetchData()   
        
        navigate('/lobby')
        
        return () => {
            abortController.abort()
        }
    }

    
    const joinGame = () => {
        const abortController = new AbortController()
        console.log(name)
        const fetchData = async() => await fetch('http://localhost:3000/api/game/join', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({player_id: name, game_id: game_id})
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
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
        <div style={{marginTop: '30rem'}}>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Create a game!
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create a game!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label for="recipient-name" class="col-form-label">Your Name</label>
                            <input type="text" class="form-control" id="recipient-name" onChange={(s) => setName(s.target.value)} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={createGame}>Play</button>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#joinModal">
            Join a Game
            </button>

            <div class="modal fade" id="joinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Join a game!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label for="recipient-name" class="col-form-label">Your Name</label>
                            <input type="text" class="form-control" id="recipient-name" onChange={(s) => setName(s.target.value)} />
                            <label for="recipient-name" class="col-form-label">Match Code</label>
                            <input type="text" class="form-control" id="recipient-name" onChange={(s) => setGameId(s.target.value)} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={joinGame}>Play</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}