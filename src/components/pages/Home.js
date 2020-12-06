import React from 'react'
import Particle from '../Particle'
import About from '../About'
import Events from '../Events'
import Team from '../Team'
import Learn from '../Learn'

function Home(){
    return (
        <div>
            <Particle classHeight='full-height'/>
            <About/>
            <Events/>
            <Team/>
            <Learn/>
        </div>
        

    )
}

export default Home