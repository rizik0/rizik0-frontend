import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import '../scss/stlyes.scss'
import GameSection from '../components/GameSection/GameSection.jsx'



export default function GamePage({UserColor}){
    
    return(
        <>
            <Navbar id='Navbar' />
            <GameSection id='GameSection' UserColor={UserColor} />
            <Footer id='Footer' />
        </>

    );
}