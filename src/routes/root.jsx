import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import Carousel from '../components/Carousel/Carousel.jsx'
import PlayNow from '../components/PlayNow/PlayNow.jsx'
import Leaderboard from '../components/Leaderboard/Leaderboard.jsx'

export default function Root(){
    return(
        <>
            <Navbar id="Navbar"/>
            <Leaderboard id="Leaderboard" playerName={"Giero"}/>
            <PlayNow />

        </>
    )
}