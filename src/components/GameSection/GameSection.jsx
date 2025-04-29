import React, {useEffect, useState} from 'react'
import RiskBoard from '../RiskBoard/RiskBoard.jsx'
import Clock from '../Clock/Clock.jsx'
import './GameSection.scss'
import apiBaseUrl from '../../config.js'

export default function GameSection({ data, initialTroops, phase }){
    const userColor = localStorage.getItem('player_color')
    const playerGoal = localStorage.getItem('playerGoal')
    const [countryName, setCountryName] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return(
        <section id="GameSection">

            <div className="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Tutorial</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <span className="modalTitle">Initial: </span>
                            <div className="modalDesc">In this initial phase of the game you need to place at least 21 troops in your own territory and prepare to fight in order to conquer your objective!</div>
                        <span className="modalTitle">Positioning: </span>
                            <div className="modalDesc">In this phase of your turn you will have to place the troops granted to you depending on the amount of territories you own. The more territories you occupy, the higher it will be!</div>
                        <span className="modalTitle">Attack: </span>
                            <div className="modalDesc">In this phase you need to show your military prowess and crush your enemies by invading their territories. First select the region you want to attack from and then select which one you want to attack! (MAX 3 troops per attack)</div>
                        <span className="modalTitle">Movement: </span>
                            <div className="modalDesc">In this phase you have the option to move troops around the territories you own!</div>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            
            <div className="container" id='infotab'>
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
                    <div className='countrySelection col-3'>
                        Region: <span style={{color:"#151F2B"}}>{countryName}</span>
                    </div>
                    <div className="clock col-2">
                        Time: <Clock id="Clock"/>
                    </div>
                    <div className='infoPoint col-1' data-bs-toggle="modal" data-bs-target="#infoModal">
                        ?
                    </div>
                </div>
                <div className="row">
                    <div className='mapContainer col-12'>
                        <RiskBoard setCountryName={setCountryName} phase={data.phase} maps={data.maps}/>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center">
                    <div className='objDisplay col-5'>
                        OBJECTIVE: <span style={{fontWeight:600}}>Conquer {playerGoal}</span>
                    </div>
                    { phase === 'initial' ? (<div className='troopPlacement col-2'>
                        Troops to place: <span style={{color: userColor}}>{initialTroops}</span>
                    </div>) : phase === 'positioning' ? (<div className='troopPlacement col-2'>
                        Reinforcements to place: <span style={{color: userColor}}>{initialTroops}</span>
                    </div>) : (<div className='troopPlacement col-2'></div>)
                    }
                    <div className='endContainer col-2'>
                        <span onClick={() => {
                            fetch(`${apiBaseUrl}/api/game/${localStorage.getItem("game_id")}/play/attacking/end`, {
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