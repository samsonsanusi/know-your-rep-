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
import Rectangle_Copy from "../assets/icons/Rectangle_Copy.png";
import Oval2 from "../assets/icons/Oval2.png";
import Rectangle_rep1 from "../assets/icons/Rectangle_rep1.png";
import Rectangle_rep2 from "../assets/icons/Rectangle_rep2.png";
import Rectangle_rep3 from "../assets/icons/Rectangle_rep3.png";
import senator_dark from "../assets/icons/senator_dark.svg";
import Group_dark from "../assets/icons/Group_dark.svg";
import Feedbacks_dark from "../assets/icons/Feedbacks_dark.svg";
import statistics_dark from "../assets/icons/statistics_dark.svg";
import keyboard_backspace from "../assets/icons/keyboard_backspace.svg";
function Homepage(){
    const [isOpen, setOpen] = useState(false)

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    
    return(
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
            <section className="reps">
            <h3 className="reps_header">POPULAR REPRESENTATIVES</h3>
            <div className="reps_section">
                <div className="card">
                  <img className="senator_images" src={Rectangle_Copy}/> 
                  <div className="container">
                      <h6 className="reps_position">HOUSE OF REPRESENTATIVE </h6>
                      <h5 className="reps_name">Shina Peller</h5>
                      <p className="reps_constituency">QUILOX, Lagos</p>
                      <div className="rating">
                          <h4 className="rating_number">4.5</h4>
                          <div className="rating_button ">
                              <img className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">419 Reviews</p>
                      </div>
                  </div>
                </div>
                <div className="card">
                  <img className="senator_images" src={Rectangle_rep1}/> 
                  <div className="container">
                      <h6 className="reps_position">STATE REPRESENTATIVE </h6>
                      <h5 className="reps_name">Abdulahi Abubakar</h5>
                      <p className="reps_constituency">Onike, Yaba, Lagos</p>
                      <div className="rating">
                          <h4 className="rating_number">3.4</h4>
                          <div className="rating_button ">
                              <img className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">98 Reviews</p>
                      </div>
                  </div>
                </div>
                <div className="card">
                  <img className="senator_images" src={Rectangle_rep2}/> 
                  <div className="container">
                      <h6 className="reps_position">SENATE PRESIDENT</h6>
                      <h5 className="reps_name">Mohammadu Malami</h5>
                      <p className="reps_constituency">Danfodio, Abuja</p>
                      <div className="rating">
                          <h4 className="rating_number">5.0</h4>
                          <div className="rating_button ">
                              <img 
                              className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">319 Reviews</p>
                      </div>
                  </div>
                </div>
                <div className="card">
                  <img className="senator_images" src={Rectangle_rep3}/> 
                  <div className="container">
                      <h6 className="reps_position">HOUSE OF REPRESENTATIVE </h6>
                      <h5 className="reps_name">Shina Peller</h5>
                      <p className="reps_constituency">QUILOX, Lagos</p>
                      <div className="rating">
                          <h4 className="rating_number">4.5</h4>
                          <div className="rating_button ">
                              <img className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">419 Reviews</p>
                      </div>
                  </div>
                </div>
                </div>
            </section>
            <section className="icon_section">
                <div className="icons_link">
                    <div>
                    <div><img src={senator_dark}/></div>
                    <h5 className="icon_text">Reps</h5>
                    </div>

                    <div className="icon_text">
                    <div><img src={Group_dark}/></div>
                    <h5>Petitions</h5>
                    </div>

                    <div className="icon_text">
                    <div><img src={Feedbacks_dark}/></div>
                    <h5>Feedbacks</h5>
                    </div>

                    <div className="icon_text">
                    <div><img src={statistics_dark}/></div>
                    <h5>Statistics</h5>
                    </div>
                </div>
            </section>
            <section className="reps">
            <h3 className="reps_header">TOP RATED REPRESENTATIVES</h3>
            <div className="reps_section">
            <div className="card">
                  <img className="senator_images" src={Rectangle_rep2}/> 
                  <div className="container">
                      <h6 className="reps_position">SENATE PRESIDENT</h6>
                      <h5 className="reps_name">Mohammadu Malami</h5>
                      <p className="reps_constituency">Danfodio, Abuja</p>
                      <div className="rating">
                          <h4 className="rating_number">5.0</h4>
                          <div className="rating_button ">
                              <img 
                              className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">319 Reviews</p>
                      </div>
                  </div>
                </div>
                <div className="card">
                  <img className="senator_images" src={Rectangle_rep1}/> 
                  <div className="container">
                      <h6 className="reps_position">STATE REPRESENTATIVE </h6>
                      <h5 className="reps_name">Abdulahi Abubakar</h5>
                      <p className="reps_constituency">Onike, Yaba, Lagos</p>
                      <div className="rating">
                          <h4 className="rating_number">3.4</h4>
                          <div className="rating_button ">
                              <img className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">98 Reviews</p>
                      </div>
                  </div>
                </div>
                <div className="card">
                  <img className="senator_images" src={Rectangle_Copy}/> 
                  <div className="container">
                      <h6 className="reps_position">HOUSE OF REPRESENTATIVE </h6>
                      <h5 className="reps_name">Shina Peller</h5>
                      <p className="reps_constituency">QUILOX, Lagos</p>
                      <div className="rating">
                          <h4 className="rating_number">4.5</h4>
                          <div className="rating_button ">
                              <img className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">419 Reviews</p>
                      </div>
                  </div>
                </div>
                <div className="card">
                  <img className="senator_images" src={Rectangle_rep3}/> 
                  <div className="container">
                      <h6 className="reps_position">HOUSE OF REPRESENTATIVE </h6>
                      <h5 className="reps_name">Shina Peller</h5>
                      <p className="reps_constituency">QUILOX, Lagos</p>
                      <div className="rating">
                          <h4 className="rating_number">4.5</h4>
                          <div className="rating_button ">
                              <img className="filled_background" src={Oval2}/> 
                          </div>
                          <p className="reviews">419 Reviews</p>
                      </div>
                  </div>
                </div>
                </div>
            </section>
            <div className="reps view_all">
                <div className="colored_arrow"><img src={keyboard_backspace}/></div>
                <h3 className="colored_header">View All Representatives</h3>
            </div>
        </div>
    )
} 
export default Homepage;

