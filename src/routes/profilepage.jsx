import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from "react"
import PlayNow from "../components/PlayNow/PlayNow"


function ProfilePage() {

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
        return (
            <div>
                <h1>{decoded.sub.username}</h1>
                <p>Won: {data.wins}</p>
                <p>Played: {data.games}</p>

                <PlayNow />
            </div>
        );
    }
}

export default ProfilePage;