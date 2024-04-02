import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Clock from '../components/Clock/Clock.jsx'
import '../scss/stlyes.scss'
import RiskBoard from '../components/RiskBoard/RiskBoard.jsx'
import * as bootstrap from 'bootstrap'


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
    ]});

    const [status, setStatus] = useState("")

    const userColor = localStorage.getItem('player_color')

    useEffect(() => {
        const abortController = new AbortController()
        const fetchData = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/maps`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {setData(ob.data)})

        const fetchStatus = async() => await fetch(`http://localhost:3000/api/game/${localStorage.getItem("game_id")}/status`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => {setStatus(ob.data.status); console.log(status)})

        fetchData()  
        fetchStatus() 
        
        return () => {
            abortController.abort()
        }
    }, [data, status]);

    return(
        <div style={{backgroundColor:'#151F2B',height:'100vh'}}>  
            <div class="container" style={{paddingTop:'10em'}}>
                <div class = "row">
                    <Navbar id="Navbar"/>
                </div>
                <div class = "row">
                    <div class = "col" style={{textAlign:'center',color:UserColor}}>
                        Turno di: {status}
                    </div>
                    <div class = "col" style={{textAlign:'center',color:userColor}}>
                        <Clock id="Clock"/>
                    </div>
                </div>
                <div class="row" >
                    <RiskBoard maps={data.maps} />
                </div>
                <div class="row" style={{textAlign:'center',color:userColor}}>
                    OBIETTIVO
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary" id="end-turn-button" style={{backgroundColor:userColor}}>
                        Termino Attacchi
                    </button>
                </div>
                <div class = "row">
                    <Footer id="Footer"/>
                </div>
            </div>
            
        </div>
    )
}