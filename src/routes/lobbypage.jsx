import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import '../scss/stlyes.scss'
import Footer from '../components/Footer/Footer.jsx'
import LobbyComponent from '../components/LobbyComponent/LobbyComponent.jsx'

export default function LobbyPage(UserColor){

    return(
        <>
            <Navbar id='Navbar' />
            <LobbyComponent id='LobbyComponent' />
            <Footer id='Footer' />
        </>

    );

}