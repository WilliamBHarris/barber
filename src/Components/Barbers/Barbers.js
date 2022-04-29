import React from 'react'
import '../Barbers/Barbers.css'
import barberIMG from '../../assets/barberimg.png'
import redStroke from '../../assets/redstroke.png'
import {AiFillFacebook} from 'react-icons/ai'

const Barbers = () => {
    return (
        <div className="barbersMain" id="barbers">
            <h1>Barbers</h1>
            <p>Choose a barber to book an appointment</p>
            <div className="barbersBox" >
                
                <div className="barbers">
                    <h3>Danny Dimes</h3>
                    <img alt='red stroke' className="redStroke" src={redStroke} />
                    <img alt='barber' className="barberImg" src={barberIMG} />
                </div>
                <div className="barbers">
                    <h3>Billy Bass</h3>
                    <img alt='red stroke' className="redStroke" src={redStroke} />
                    <img alt='barber' className="barberImg" src={barberIMG} />
                </div>
                <div className="barbers">
                    <h3>Johnny Jobs</h3>
                    <img alt='red stroke' className="redStroke" src={redStroke} />
                    <img alt='barber' className="barberImg" src={barberIMG} />
                </div>
                <div className="barbers">
                    <h3>Sammy Slice</h3>
                    <img alt='red stroke' className="redStroke" src={redStroke} />
                    <img alt='barber' className="barberImg" src={barberIMG} />
                </div>
            </div>
            <div className="barbersBottom">
                <h3>Reach Out</h3>
                <div className="line"></div>
                <div className="barbersBottomBox">Contact our Tampa, FL location <br /># 777-777-7777</div>
                <div className="barbersBottomBox">
                <h4>Follow us on social media</h4>
                <h1><AiFillFacebook size={80} /></h1>
                <h1><AiFillFacebook size={80} /></h1>
                <h1><AiFillFacebook size={80} /></h1>
                <h1><AiFillFacebook size={80} /></h1>
                 </div>
                <p>Made by: Will Harris - Copyright &copy; 2022</p>
            </div>
        </div>
    )
}

export default Barbers
