import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Hero from '../../../Components/Hero/Hero'
import './Home.css'
import About from '../../../Components/About/About'
import PackageCards from '../../../Components/PackageCard/PackageCard'
import Footer from '../../../Components/Footer/Footer'


function Home() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <About/>
            <PackageCards />
            <Footer/>
        </div>
    )
}

export default Home
