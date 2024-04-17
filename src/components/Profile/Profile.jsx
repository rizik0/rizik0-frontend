import './Profile.scss'
import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from "react"
import { useSpring, animated } from '@react-spring/web'
import soldier from '../../assets/soldier.png'
import { Link as LinkRouter } from 'react-router-dom'

function Matches({ numGames }){
    const { num } = useSpring({
        from : { num: 0 },
        num: numGames,
        delay: 200,
        config: { mass:1 , tension: 30, friction: 20}
    })

    return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>
}

function Wins({ numWins }){
    const { num } = useSpring({
        from : { num: 0 },
        num: numWins,
        delay: 200,
        config: { mass:1 , tension: 30, friction: 20}
    })

    return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>
}

function Loss({ numLosses }){
    const { num } = useSpring({
        from : { num: 0 },
        num: numLosses,
        delay: 200,
        config: { mass:1 , tension: 30, friction: 20}
    })

    return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>
}

function Rate({ winRate }){
    const { num } = useSpring({
        from : { num: 0 },
        num: winRate,
        delay: 200,
        config: { mass:1 , tension: 30, friction: 20}
    })

    return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>
}

export default function Profile(){

    const [userPosition, setUserPosition] = useState(null);
    const [data, setData] = useState({
        wins: 0,
        games: 0,
    })

    useEffect(() => {
        if (localStorage.getItem('jwt') !== null) {

            const abortController = new AbortController()
            const fetchData = async() => await fetch('http://localhost:3000/api/player/profile', {
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
            })
                .then(res => res.json()
                    .then(data => ({data: data, status: res.status})))
                .then(ob => setData(ob.data))

            fetchData()

            return () => {
                abortController.abort()
            }

        }

    }, [])

    if (localStorage.getItem('jwt') === null) {
        return (
            <>
                you have to be logged in to see this page
            </>
        )
    }
    else {
        const decoded = jwtDecode(localStorage.getItem('jwt'))
        const numGames = data.games
        const numWins = data.wins
        const numLosses = numGames - numWins
        const winRate = numWins / numGames * 100

        useEffect(() => {
            fetch('http://localhost:3000/api/leaderboard')
            .then(response => response.json())
            .then(data => {
                const standings = data.standings
                setUserPosition(standings.findIndex(player => player[0] === decoded.sub.username))
            });
        },[])
        
        return (
            <section id='Profile'>
                <div id='profileTitle'>Welcome {decoded.sub.username}, you are currently in postion #{userPosition}!</div>
                <div id='profileSoldier'>
                    <img src={soldier} alt="" />
                </div>
                <div style={{background:'#005E7A', paddingTop:'6vh'}}>  
                    <div id='statsTitle'>📈 STATS 📈</div>
                    <div className="profileContainer container">
                        <div className='row justify-content-md-center text-center'>
                            <div className='statsTab col-3'>
                                Matches
                                <div className='statsNumber'>
                                    <Matches numGames={numGames} />
                                </div>
                            </div>
                            <div className='statsTab col-3'>
                                Won
                                <div className='statsNumber'>
                                    <Wins numWins={numWins} />
                                </div>
                            </div>
                            <div className='statsTab col-3'>
                                Lost
                                <div className='statsNumber'>
                                    <Loss numLosses={numLosses} />
                                </div>
                            </div>
                            <div className='statsTab col-3'>
                                % of victory
                                <div className='statsNumber'>
                                    <Rate winRate={winRate} />
                                </div>
                        </div>
                    </div>
                    <div className='logoutButton'>
                        <LinkRouter style={{color:"#151F2B", textDecoration:"none"}} to='/logout'>Logout</LinkRouter> 
                    </div>
                </div>
                
                </div>

            </section>
        );
    }
}