import '../scss/stlyes.scss'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Leaderboard from '../components/Leaderboard/Leaderboard.jsx'
import PlayNow from '../components/PlayNow/PlayNow.jsx'
import GameRules from '../components/GameRules/GameRules.jsx'

export default function Root(){

    const [data, setData] = useState({
        standings: [
            ['', 0],
            ['', 0],
            ['', 0],
            ['', 0],
            ['', 0]
        ],
        potw: ''
    })

    console.log(data)

    useEffect(() => {
        const abortController = new AbortController()
        const fetchData = async() => await fetch('http://localhost:3000/api/leaderboard', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json()
                .then(data => ({data: data, status: res.status})))
            .then(ob => setData(ob.data))

        fetchData()

        return () => {
            abortController.abort()
        }
    }, [])



    return(
        <> 
            <Navbar id="Navbar"/>
            <Leaderboard id="Leaderboard" powName={data.potw} firstLeader={data.standings[0][0]} firstPoints={data.standings[0][1]} secondLeader={data.standings[1][0]} secondPoints={data.standings[1][1]} thirdLeader={data.standings[2][0]} thirdPoints={data.standings[2][1]} playerLeaderFourth={data.standings[3][0]} playerFourthPoints={data.standings[3][1]} playerLeaderFifth={data.standings[4][0]} playerFithPoints={data.standings[4][1]}/>
            <PlayNow id="PlayNow"/>
            <GameRules id="GameRules"/>
            <Footer id="Footer"/>
        </>
    )
}