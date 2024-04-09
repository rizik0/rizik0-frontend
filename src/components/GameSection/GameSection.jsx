import React, {useEffect, useState} from 'react'
import RiskBoard from '../RiskBoard/RiskBoard.jsx'
import Clock from '../Clock/Clock.jsx'
import './GameSection.scss'

export default function GameSection({ data, troopsPlaced, reinforcementPlaced }){
    const userColor = localStorage.getItem('player_color')
    const playerGoal = localStorage.getItem('playerGoal')
    const [countryName, setCountryName] = useState(null);
    const [showTroopPlacement, setShowTroopPlacement] = useState(false);
    const [ShowReinforcementPlacement, setShowReinforcementPlacement] = useState(false);

    useEffect(() => {
        if (troopsPlaced) {
            setShowTroopPlacement(true);
        }
        
        if(troopsPlaced == 0){
            setShowTroopPlacement(false);
        }
    }, [troopsPlaced]);

    useEffect(() => {
        if (reinforcementPlaced) {
            setShowReinforcementPlacement(true);
        }

        if(reinforcementPlaced == 0){
            setShowReinforcementPlacement(false);
        }
    }, [reinforcementPlaced]);

    return(
        <section id="GameSection">
            <div className="container">
                <div className="infoDisplay row text-center justify-content-between">
                    <div className= "turnDisplay col-2">
                        Turn: <span style={{color: userColor}}>{data.status}</span>
                    </div>
                    <div className='modeDisplay col-2'>
                        Mode: <span style={{color: userColor}}>{Math.floor(data.turn/3) + '-' + data.phase}</span>
                    </div>
                    <div className='playerColor col-2'>
                        Color:<span style={{backgroundColor: userColor, marginLeft:"1vh", height:"2vh", width:"2vh"}}></span>    
                    </div>
                    <div className='countrySelection col-4'>
                        Region: <span style={{color:"#151F2B"}}>{countryName}</span>
                    </div>
                    <div className="clock col-2">
                        Time: <Clock id="Clock"/>
                    </div>
                </div>
                <div className="row">
                    <div className='mapContainer col-12'>
                        <RiskBoard setCountryName={setCountryName} phase={data.phase} maps={data.maps}/>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className='objDisplay col-5'>
                        OBJECTIVE: <span style={{fontWeight:600}}>Conquer {playerGoal}</span>
                    </div>
                    {(showTroopPlacement && <div className='troopPlacement col-2'>
                        Troops placed: <span style={{color: userColor}}>{troopsPlaced}</span>
                    </div>) || (ShowReinforcementPlacement && <div className='troopPlacement col-2'>
                        Reinforcements placed: <span style={{color: userColor}}>{reinforcementPlaced}</span>
                    </div>)}
                    <div className='endContainer col-2'>
                        <span onClick={() => {
                            fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/attacking/end`, {
                                method: "POST",
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({player_id: localStorage.getItem('player_id')})
                            })
                                .then(res => res.json()
                                    .then(data => ({data: data, status: res.status})))
                                .then(ob => {console.log(ob.data)})
                        }}>End Turn</span>
                    </div>
                </div>
            </div>
                
        </section>
    )
}


/*




<button type="button" className="btn btn-primary" id="end-turn-button" style={{backgroundColor:userColor}}>
                        Termino Attacchi
                    </button>
*/