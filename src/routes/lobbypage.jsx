import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import { useNavigate } from 'react-router-dom'
import { clear } from 'localforage'
import loadingPic from '../assets/logo_circle.png'

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
            if (status != "waiting" && status != null){

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
        return (
            <div style={{backgroundColor:'#151F2B',height:'100vh'}}>
                <div class="container">
                    <div class="row">
                        <Navbar id="Navbar"/>
                    </div>
                    <div class="row" style={{textAlign:'center',color:'white',paddingTop:'10em'}}>
                        <div><img className="loading" src={loadingPic} alt="loading" style={{width: "10rem", marginTop: "10rem"}} /></div>     
                        <div style={{marginTop: "1rem", fontSize: "2rem"}}>Loading...</div>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return(
            <div style={{backgroundColor:'#151F2B',height:'100vh'}}>
                <div class="container">
                    <div class="row">
                        <Navbar id="Navbar"/>
                    </div>
                    <div class="row" style={{textAlign:'center',color:'white',paddingTop:'10em'}}>
                        <div style={{fontSize: "2rem", fontWeight: "bold", color: "#fefde8"}}>Waiting for other players...</div>
                        <div style={{fontSize: "1.5rem", fontWeight: "bold", color: "#fefde8", marginBottom: "1rem"}}>Game Code: {localStorage.getItem('game_id')}</div>
                        <div style={{backgroundColor: "#035e7b", borderRadius: "15px", padding: "2rem"}}>
                            {players.map((player) => {
                                return(
                                    <div key={player.name} style={{color: player.color, backgroundColor: "#fefde8", borderRadius: "10px", padding: "1rem", textAlign: "left", margin: "0.5rem", fontSize: "1.2rem"}}>{player.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}