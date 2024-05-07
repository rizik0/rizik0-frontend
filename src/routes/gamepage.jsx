import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import GameSection from '../components/GameSection/GameSection.jsx'
import * as bootstrap from 'bootstrap'
import { useNavigate } from 'react-router-dom'

export default function GamePage({UserColor}){

    const [data, setData] = useState({maps: [
        {"name": "alaska", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["northwest_territory", "alberta", "kamchatka"], "color": null},
        {"name": "northwest_territory", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["alaska", "alberta", "ontario", "greenland"], "color": null},
        {"name": "alberta", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["alaska", "northwest_territory", "ontario", "western_united_states"], "color": null},
        {"name": "ontario", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["northwest_territory", "alberta", "greenland", "quebec", "western_united_states", "eastern_united_states"], "color": null},
        {"name": "greenland", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["northwest_territory", "ontario", "quebec", "iceland"], "color": null},
        {"name": "quebec", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["ontario", "greenland", "eastern_united_states"], "color": null},
        {"name": "western_united_states", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["alberta", "ontario", "eastern_united_states", "central_america"], "color": null},
        {"name": "eastern_united_states", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["ontario", "quebec", "western_united_states", "central_america"], "color": null},
        {"name": "central_america", "troops": 0, "owner": null, "continent": "north-america", "neighbours": ["western_united_states", "eastern_united_states", "venezuela"], "color": null},
        {"name": "venezuela", "troops": 0, "owner": null, "continent": "south-america", "neighbours": ["central_america", "peru", "brazil"], "color": null},
        {"name": "peru", "troops": 0, "owner": null, "continent": "south-america", "neighbours": ["venezuela", "brazil", "argentina"], "color": null},
        {"name": "brazil", "troops": 0, "owner": null, "continent": "south-america", "neighbours": ["venezuela", "peru", "argentina", "north_africa"], "color": null},
        {"name": "argentina", "troops": 0, "owner": null, "continent": "south-america", "neighbours": ["peru", "brazil"], "color": null},
        {"name": "iceland", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["greenland", "scandinavia", "great_britain"], "color": null},
        {"name": "scandinavia", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["iceland", "ukraine", "northern_europe"], "color": null},
        {"name": "ukraine", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["scandinavia", "northern_europe", "southern_europe", "ural", "afghanistan", "middle_east"], "color": null},
        {"name": "great_britain", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["iceland", "western_europe", "northern_europe"], "color": null},
        {"name": "northern_europe", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["scandinavia", "ukraine", "southern_europe", "western_europe", "great_britain"], "color": null},
        {"name": "western_europe", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["great_britain", "northern_europe", "southern_europe", "north_africa"], "color": null},
        {"name": "southern_europe", "troops": 0, "owner": null, "continent": "europe", "neighbours": ["ukraine", "northern_europe", "western_europe", "egypt", "north_africa", "middle_east"], "color": null},
        {"name": "north_africa", "troops": 0, "owner": null, "continent": "africa", "neighbours": ["brazil", "western_europe", "southern_europe", "egypt", "east_africa", "congo"], "color": null},
        {"name": "egypt", "troops": 0, "owner": null, "continent": "africa", "neighbours": ["southern_europe", "north_africa", "east_africa", "middle_east"], "color": null},
        {"name": "east_africa", "troops": 0, "owner": null, "continent": "africa", "neighbours": ["north_africa", "egypt", "congo", "south_africa", "madagascar", "middle_east"], "color": null},
        {"name": "congo", "troops": 0, "owner": null, "continent": "africa", "neighbours": ["north_africa", "east_africa", "south_africa"], "color": null},
        {"name": "south_africa", "troops": 0, "owner": null, "continent": "africa", "neighbours": ["east_africa", "congo", "madagascar"], "color": null},
        {"name": "madagascar", "troops": 0, "owner": null, "continent": "africa", "neighbours": ["east_africa", "south_africa"], "color": null},
        {"name": "ural", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["ukraine", "siberia", "china", "afghanistan"], "color": null},
        {"name": "siberia", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["ural", "yakutsk", "irkutsk", "mongolia", "china"], "color": null},
        {"name": "yakutsk", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["siberia", "kamchatka", "irkutsk"], "color": null},
        {"name": "kamchatka", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["alaska", "yakutsk", "irkutsk", "mongolia", "japan"], "color": null},
        {"name": "irkutsk", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["siberia", "yakutsk", "kamchatka", "mongolia"], "color": null},
        {"name": "mongolia", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["siberia", "irkutsk", "kamchatka", "japan", "china"], "color": null},
        {"name": "china", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["ural", "siberia", "mongolia", "afghanistan", "india", "siam"], "color": null},
        {"name": "afghanistan", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["ukraine", "ural", "china", "middle_east", "india"], "color": null},
        {"name": "middle_east", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["ukraine", "southern_europe", "egypt", "east_africa", "india", "afghanistan"], "color": null},
        {"name": "india", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["china", "afghanistan", "middle_east", "siam"], "color": null},
        {"name": "siam", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["china", "indonesia", "india"], "color": null},
        {"name": "japan", "troops": 0, "owner": null, "continent": "asia", "neighbours": ["kamchatka", "mongolia"], "color": null},
        {"name": "indonesia", "troops": 0, "owner": null, "continent": "oceania", "neighbours": ["siam", "new_guinea", "western_australia"], "color": null},
        {"name": "new_guinea", "troops": 0, "owner": null, "continent": "oceania", "neighbours": ["indonesia", "western_australia", "eastern_australia"], "color": null},
        {"name": "western_australia", "troops": 0, "owner": null, "continent": "oceania", "neighbours": ["indonesia", "new_guinea", "eastern_australia"], "color": null},
        {"name": "eastern_australia", "troops": 0, "owner": null, "continent": "oceania", "neighbours": ["new_guinea", "western_australia"], "color": null}
    ],
    status: "waiting",
    phase: "initial",
    turn: 0,
    players: [{name: '', color: ''}]
    });

    const [initialTroops, setInitialTroops] = useState(21)

    const [textTemp, setTextTemp] = useState('')
    const [territoryTemp, setTerritoryTemp] = useState('')

    const [fromTerritory, setFromTerritory] = useState('')
    const [toTerritory, setToTerritory] = useState('')

    const userColor = localStorage.getItem('player_color')

    const [flagEndGame, setFlagEndGame] = useState(true)
    const [errorFlag, setErrorFlag] = useState(true)

    const navigate = useNavigate()

    function getOwner(territory){ 
        return data.maps.find(map => map.name === territory).owner
    }

    useEffect(() => {
        const abortController = new AbortController()
        const fetchData = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/status`, {
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
                    navigate('/')
                }
                else {
                    setData(ob.data)
                }
            })
        
        fetchData()  

        if (data.status === localStorage.getItem('player_id')) {
            if (data.phase === 'initial') {
                const fetchInitialGet = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/initial/get`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({player_id: localStorage.getItem('player_id')})
                })
                    .then(res => res.json()
                        .then(data => ({data: data, status: res.status})))
                    .then(ob => {
                        if (ob.data['error']) {
                            if (ob.data['error'] !== "Game not found") {
                                alert(ob.data['error'])
                            }
                            navigate('/')
                        }
                        setInitialTroops(ob.data.troops)
                    })
                
                fetchInitialGet()
            }

            if (data.phase === 'positioning') {
                const fetchPositioningGet = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/positioning/get`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({player_id: localStorage.getItem('player_id')})
                })
                    .then(res => res.json()
                        .then(data => ({data: data, status: res.status})))
                    .then(ob => {setInitialTroops(ob.data.troops)})
                
                fetchPositioningGet()
            }
        }

        if (data.phase === 'won' && data.status === localStorage.getItem('player_id') && flagEndGame === true) {
            setFlagEndGame(false)

            const winner_modal = new bootstrap.Modal(document.getElementById('winner_modal'), {keyboard: false})
            winner_modal.show()

        }

        else if (data.phase === 'won' && data.status !== localStorage.getItem('player_id') && flagEndGame === true) {
            setFlagEndGame(false)
            const loser_modal = new bootstrap.Modal(document.getElementById('loser_modal'), {keyboard: false})
            loser_modal.show()
        }
        
        return () => {
            abortController.abort()
        }
    }, [data]);
   
    return(
        <>               
            <Navbar id="Navbar"/>
            <GameSection data={data} id="GameSection" initialTroops={initialTroops} phase={data.phase} />

            { data.status === localStorage.getItem('player_id') ?
                data.maps.map((map) => {        
                    return (
                        <>
                            <div className="modal fade" id={`${map.name}_initial_modal`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Place Troops on {map.name}!</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <label for="recipient-name" className="col-form-label">How many?</label>
                                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setTextTemp(s.target.value)}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => {
                                                console.log('sending')
                                                console.log(textTemp)
                                                console.log('troops: ' + initialTroops)
                                                const newTotalTroopsPlaced = initialTroops - parseInt(textTemp)
                                                if(parseInt(textTemp) > 0 && parseInt(textTemp) <= initialTroops){
                                                    if (newTotalTroopsPlaced < 22) {
                                                        setInitialTroops(newTotalTroopsPlaced)
                                                    }else if(newTotalTroopsPlaced === 0){
                                                        setInitialTroops(0)
                                                    }
                                                }
                                                
                                                fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/initial/place`, {
                                                    method: "POST",
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({player_id: localStorage.getItem('player_id'), troops: textTemp, territory: map.name})
                                                })
                                                    .then(res => res.json()
                                                        .then(data => ({data: data, status: res.status})))
                                                    .then(ob => {
                                                        if (ob.data['error']) {
                                                            if (ob.data['error'] !== "Game not found") {
                                                                alert(ob.data['error'])
                                                            }    
                                                        }
                                                    })
                                                    const modalElement = document.getElementById(`${map.name}_initial_modal`)
                                                    const modalInstance = bootstrap.Modal.getInstance(modalElement)
                                                    modalInstance.hide()
                                            }} >Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id={`${map.name}_positioning_modal`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Place troops on <span style={{fontWeight:'800'}}>{map.name} </span></h1>
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <label for="recipient-name" className="col-form-label">How many?</label>
                                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setTextTemp(s.target.value)}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => {
                                                console.log('sending')
                                                console.log(textTemp)
                                                const newReinforcementsPlaced = initialTroops - parseInt(textTemp)
                                                if(parseInt(textTemp) > 0 && parseInt(textTemp) <= initialTroops){
                                                    if (newReinforcementsPlaced < 5) {
                                                        setInitialTroops(newReinforcementsPlaced)
                                                    }
                                                    if (newReinforcementsPlaced === 0) {
                                                        setInitialTroops(0)
                                                    }
                                                }
                                                
                                                fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/positioning/place`, {
                                                    method: "POST",
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({player_id: localStorage.getItem('player_id'), troops: textTemp, territory: map.name})
                                                })
                                                    .then(res => res.json()
                                                        .then(data => ({data: data, status: res.status})))
                                                    .then(ob => {
                                                        if (ob.data['error']) {
                                                            if (ob.data['error'] !== "Game not found") {
                                                                alert(ob.data['error'])
                                                            }    
                                                        }
                                                    })
                                                    const modalElement = document.getElementById(`${map.name}_positioning_modal`)
                                                    const modalInstance = bootstrap.Modal.getInstance(modalElement)
                                                    modalInstance.hide()
                                            }} >Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id={`${map.name}_attacking_modal`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Attack from {map.name}!</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <label for="recipient-name" className="col-form-label">What do you want to attack?</label>
                                            <select className="form-select" onChange={(s) => {setTerritoryTemp(s.target.value)}}>
                                                <option selected>Choose...</option>
                                                {
                                                    map.neighbours
                                                        .filter(neighbour => localStorage.getItem('player_id') != getOwner(neighbour)) 
                                                        .map((neighbour) => {
                                                        return(
                                                            <option>{neighbour}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <label for="recipient-name" className="col-form-label">How many troops?</label>
                                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setTextTemp(s.target.value)}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => {
                                                console.log('sending')
                                                // console.log(textTemp)
                                                console.log({player_id: localStorage.getItem('player_id'), from_territory: map.name, to_territory: territoryTemp, troops: textTemp})
                                                fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/attacking/`, {
                                                    method: "POST",
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({player_id: localStorage.getItem('player_id'), from_territory: map.name, to_territory: territoryTemp, troops: textTemp})
                                                })
                                                    .then(res => res.json()
                                                        .then(data => ({data: data, status: res.status})))
                                                     .then(ob => {
                                                        if (ob.data['error']) {
                                                            if (ob.data['error'] !== "Game not found") {
                                                                alert(ob.data['error'])
                                                            } 
                                                            return 'no'   
                                                        }
                                                        else {
                                                            return ob.data.won
                                                        }
                                                    })
                                                     .then(won => {
                                                        if (won === 'yes') {
                                                            setFromTerritory(map.name)
                                                            const win_modal = new bootstrap.Modal(document.getElementById('attack_move_modal'), {keyboard: false})
                                                            
                                                            win_modal.show()
                                                        }
                                                     })
                                                    const win_modal = new bootstrap.Modal(document.getElementById('attack_move_modal'))
                                                    const modalElement = document.getElementById(`${map.name}_attacking_modal`)
                                                    const modalInstance = bootstrap.Modal.getInstance(modalElement)
                                                    win_modal.hide()
                                                    modalInstance.hide()
                                            }} >Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id={`${map.name}_movement_modal`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Move from {map.name}!</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <label for="recipient-name" className="col-form-label">Where do you want to move your troops?</label>
                                            <select className="form-select" onChange={(s) => {setTerritoryTemp(s.target.value)}}>
                                                <option selected>Choose...</option>
                                                {
                                                    map.neighbours
                                                        .filter(neighbour => localStorage.getItem('player_id') === getOwner(neighbour)) 
                                                        .map((neighbour) => {
                                                        return(
                                                            <option>{neighbour}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <label for="recipient-name" className="col-form-label">How many troops? (0 is an acceptable option)</label>
                                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setTextTemp(s.target.value)}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => {
                                                console.log('sending')
                                                // console.log(textTemp)
                                                console.log({player_id: localStorage.getItem('player_id'), from_territory: map.name, to_territory: territoryTemp, troops: textTemp})
                                                fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/movement/`, {
                                                    method: "POST",
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({player_id: localStorage.getItem('player_id'), from_territory: map.name, to_territory: territoryTemp, troops: textTemp})
                                                })
                                                    .then(res => res.json()
                                                        .then(data => ({data: data, status: res.status})))
                                                    .then(ob => {
                                                            if (ob.data['error']) {
                                                                if (ob.data['error'] !== "Game not found") {
                                                                    alert(ob.data['error'])
                                                                }   
                                                            }
                                                        }
                                                    )
                                                    
                                                    const modalElement = document.getElementById(`${map.name}_movement_modal`)
                                                    const modalInstance = bootstrap.Modal.getInstance(modalElement)
                                                    modalInstance.hide()
                                            }} >Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                :
                null
            }
            

            <div className="modal fade" id="attack_move_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Move troops to the territory you won!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label for="recipient-name" className="col-form-label">How many?</label>
                            <input type="text" className="form-control" id="recipient-name" onChange={(s) => setTextTemp(s.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                console.log('sending')
                                console.log(textTemp)
                                fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/play/attacking/move`, {
                                    method: "POST",
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({player_id: localStorage.getItem('player_id'), from_territory: fromTerritory, to_territory: territoryTemp, troops: textTemp})
                                })
                                    .then(res => res.json()
                                        .then(data => ({data: data, status: res.status})))
                                    .then(ob => {
                                        if (ob.data['error']) {
                                            if (ob.data['error'] !== "Game not found") {
                                                alert(ob.data['error'])
                                            }    
                                        }
                                    })
                                    const modalElement = document.getElementById('attack_move_modal')
                                    const modalInstance = bootstrap.Modal.getInstance(modalElement)
                                    modalInstance.hide()
                            }} >Send</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="winner_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">YOU WIN</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>Congratulations! You have won the game!</h1>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                const modalElement = document.getElementById('winner_modal')
                                const modalInstance = bootstrap.Modal.getInstance(modalElement)
                                modalInstance.hide()

                                navigate('/')

                                localStorage.removeItem('game_id')
                                localStorage.removeItem('player_id')
                                localStorage.removeItem('player_color')
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="loser_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">You have lost...</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>The winner is {data.status}</h1>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                const loser_modal = new bootstrap.Modal(document.getElementById('loser_modal'), {keyboard: false})

                                loser_modal.hide()

                                navigate('/')
                                
                                localStorage.removeItem('game_id')
                                localStorage.removeItem('player_id')
                                localStorage.removeItem('player_color')
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}