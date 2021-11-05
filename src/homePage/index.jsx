import Logo from "../assets/icons/Logo.png";
import "./style.css";
import Hamburger from 'hamburger-react';
import {useState} from "react";
import senator from "../assets/icons/senator.png";
import Oval from "../assets/icons/Oval.png";
import Vector from "../assets/icons/Vector.svg";
import Group from "../assets/icons/Group.svg";
import statistics from "../assets/icons/statistics.svg";
import local_offer_material from "../assets/icons/local_offer_material.svg";
function Homepage(){
    const [isOpen, setOpen] = useState(false)

    return(
        //clip_path
        <div className="homepage">
            <div className="clipPath">
            <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70.5" cy="-30.5" r="45.5" stroke="url(#paint0_linear_25:117)" stroke-width="50"/>
            <defs>
            <linearGradient id="paint0_linear_25:117" x1="25" y1="-76" x2="25" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0.538462" stop-color="#90DF6F"/>
            <stop offset="1" stop-color="#00973F"/>
            </linearGradient>
            </defs>
            </svg>
            </div>
            {/*  header section */} 
            <div className="header">
            <div className="logo"><img src={Logo}/></div>
            <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            </div>
            <section className="main_page">
            <div>
            <h1 className="main_header">Know your local area representatives.</h1>
            </div>
            {/* search bar */}
            <div className="search_section">
                <div className="search_input">
                <form>
                <input type="text" className="input_address" placeholder="Anthony Ajayi, Onike, Yaba, Lagos"></input>
                <img className="search_icon" src={Oval}/>
                </form>
                </div>
            </div>
            </section>
            {/* features */}
            <div className="features_section">
                <div className="icon_style">
                <div className="icon_background"><img className="icons" src={senator}/></div>
                <h5 className="text">Reps</h5>
                </div>

               <div className="icon_style">
                   <div img className="icon_background petition"><img className="icons petitions" src={Vector}/></div>
                   <h5 className="text">Petitions</h5>
               </div>

                <div className="icon_style">
                    <div className="icon_background feedback"><img className="icons feedbacks" src={Group}/></div>
                    <h5 className="text">Feedbacks</h5>
                </div>

                <div className="icon_style">
                    <div className="icon_background report"><img className="icons reports" src={statistics}/></div>
                    <h5 className="text">Reports</h5>
                </div>
            </div>
            <div className="question_section">
                <div className="question_background">
                    <img className="lock" src={local_offer_material}/>
                    <p className="para_question">Answer these questions & <span>Get N1,000 Voucher</span></p>
                </div>
            </div>
        </div>
    )
} 
export default Homepage;