import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import Carousel from '../components/Carousel/Carousel.jsx'
import { useNavigate } from 'react-router-dom'
import { clear } from 'localforage'

export default function LobbyPage(UserColor){

    const [status, setStatus] = useState("waiting")
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const abortController = new AbortController()
        const fetchStatus = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/status`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {setStatus(ob.data.status); console.log(status)})
        
        const fetchPlayers = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/players`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {setPlayers(ob.data.players)})

        
        const interval = setInterval(() => {

            fetchStatus()
            fetchPlayers()
            if (status != "waiting"){

                for (let i = 0; i < players.length; i++){
                    if (players[i].name === localStorage.getItem('player_id')){
                        localStorage.setItem('player_color', players[i].color)
                    }
                }

                navigate('/game')
                clearInterval(interval)
            }
    

        }, 1000)

        
        
        
        return () => {
            abortController.abort()
        }
    }, [status]);



    if (localStorage.getItem('game_id') === null){
        document.body.classList.remove('modal-open');
        return (<h1>Bro devi prima imboccare in una partita</h1>)
    }

    else {
        return(
            <div style={{backgroundColor:'#151F2B',height:'100vh'}}>
                <div class="container">
                    <div class="row">
                        <Navbar id="Navbar"/>
                    </div>
                    <div class="row" style={{textAlign:'center',color:'white',paddingTop:'10em'}}>
                        Aspettando altri giocatori...
                        <div>Invita i tuoi amici con il codice {localStorage.getItem('game_id')}</div>
                        {players.map((player) => {
                            return(
                                <p key={player.name} style={{color: player.color}}>{player.name}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}