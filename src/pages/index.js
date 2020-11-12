import React, { useState } from 'react'
import AboutSection from '../components/AboutSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/Data'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>

            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <AboutSection {...homeObjOne} />
            <AboutSection {...homeObjTwo} />
            <AboutSection {...homeObjThree} />
        </>
    );
};

export default Home
