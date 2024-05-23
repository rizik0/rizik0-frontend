import React, { useEffect, useState } from 'react'
import '../../scss/stlyes.scss'
import { useNavigate } from 'react-router-dom'
import loadingPic from '../../assets/logo_circle.png'
import avatar from '../../assets/avatar.png'
import copy from '../../assets/copy.png'
import tic from '../../assets/tic.png'
import './LobbyComponent.scss'


export default function LobbyComponent(UserColor){

    function copyCode() {
        navigator.clipboard.writeText(localStorage.getItem('game_id'))
        
        const copyImage = document.querySelector('.copy');
        copyImage.classList.add('animateOnClick');
    
    }

    const [status, setStatus] = useState("waiting")
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()
    const [errorFlag, setErrorFlag] = useState(true)

    useEffect(() => {
        const abortController = new AbortController()
        const fetchStatus = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/status`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' } 
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {
                if (ob.data['error'] && errorFlag) {
                    setErrorFlag(false)
                    if (ob.data['error'] !== "Game not found") {
                        alert(ob.data['error'])
                    }
                    clearInterval(interval)
                    navigate('/')
                }
                else {
                    setStatus(ob.data.status); 
                }
            })
        
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
                clearInterval(interval)
                navigate('/game')
            }
    

        }, 1000)

        
        
        
        return () => {
            abortController.abort()
        }
    }, [status]);


    if (localStorage.getItem('game_id') === null){
        document.body.classList.remove('modal-open');
        return (
            <section id='LobbyComponent'>
                <div class="lobbyContainer container">
                    <div class="row" style={{textAlign:'center',color:'white',paddingTop:'10em'}}>
                        <div><img className="loading" src={loadingPic} alt="loading" style={{width: "10rem", marginTop: "10rem"}} /></div>     
                        <div style={{marginTop: "1rem", fontSize: "2rem"}}>Loading...</div>
                    </div>
                </div>
            </section>
        )
    }

    else {
        return(
            <section id='LobbyComponent'>
                <div class="container">
                    <div className='row'>
                        <div className='lobbyTitle col-12 text-center'>
                            Waiting for other players...
                        </div>
                    </div>
                    <div className='row'>
                        <div className='lobbyContainer container'>
                            {players.map((player) => {
                                return(
                                    <div className='container' key={player.name}> 
                                        <div className='row playerLobby'>
                                            <div className='col-xl-1 col-md-2 col-sm-3 col-4'>
                                                <img className='avatarLobby' src={avatar}/>
                                            </div>
                                            <div className='col-xl-9 col-md-8 col-sm-5 col-3'>
                                                <div>{player.name}</div>
                                            </div>
                                            <div className='col-xl-2 col-md-2 col-sm-2 col-1'>
                                                <img className='ticLobby' src={tic} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='codeContainer col-4'>
                            <div className='codeText'>
                                Game Code: {localStorage.getItem('game_id')}
                                <img className='copy' onClick={copyCode} src={copy} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

