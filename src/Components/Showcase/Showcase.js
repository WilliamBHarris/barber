import React from 'react'
import '../Showcase/Showcase.css'
import man from '../../assets/pngegg.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { motion } from 'framer-motion'

const Showcase = () => {
    return (
        <div className="showcaseMain" id="home">
            <h1 className="showcaseTitle">Barber</h1>
            <div className="showBox1">
            </div>
            <div className="showBox2">
                <img className="barber2" src={man} alt='barber'/>
            </div>
            <a href='#about'><div className="downArrow">
                <motion.p initial={{y: -5}} animate={{y: 10}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}><AiOutlineArrowDown size={30} /></motion.p>
            </div></a>
        </div>
    )
}

export default Showcase
