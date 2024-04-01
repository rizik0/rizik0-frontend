import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import Leaderboard from '../components/Leaderboard/Leaderboard.jsx'
import PlayNow from '../components/PlayNow/PlayNow.jsx'
import GameRules from '../components/GameRules/GameRules.jsx'

export default function Root(){
    return(
        <>
            <Navbar id="Navbar"/>
            <Leaderboard id="Leaderboard" powName={"Giero"} firstLeader={"Giero"} firstPoints={10} secondLeader={"Cristian"} secondPoints={6} thirdLeader={"Piter"} thirdPoints={3} playerLeaderFourth={"Leo"} playerFourthPoints={1} playerLeaderFifth={"Gabbo"} playerFithPoints={0}/>
            <PlayNow id="PlayNow"/>
            <PlayNow />
            <GameRules id="GameRules"/>

        </>
    )
}