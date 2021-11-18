import "./style.css";
import clip_path from "../assets/icons/clip_path2.svg"; 
import arrow_down from "../assets/icons/arrow_down.svg";
import gps from "../assets/icons/gps.svg";
import senator_dark from "../assets/icons/senator_dark.svg";
import Group_dark from "../assets/icons/Group_dark.svg";
import statistics_dark from "../assets/icons/statistics_dark.svg";
import Feedbacks_dark from "../assets/icons/Feedbacks_dark.svg";


function Search(){
    return(
        <div className="search">
            <div className="clip_path">
            <img src={clip_path}/>
            </div>
            <div className="arrow_down">
                <img className="arrow_down_icon" src={arrow_down}/>
            </div>

            <section>
                <div>
                    <form>
                        <input type="text" id="address" placeholder="Onike, Yaba, Lagos"/>
                        <span>CHANGE</span>
                    </form>
                </div>  
            </section>
            <div className="gps">
                <img className="gps_icon" src={gps}/>
                <h3 className="gps_text">Use Current Location</h3>
            </div>
            <h3 className="gps main">POPULAR LOCATION NEAR YOU</h3>
            <div className="location_section">
                <div className="location_suggestion">
                    <p className="location">Somolu</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Ikorodu West</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Ebute Meta</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Ajanaku Estate</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Tinubu Lake, Surulere</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Femikokusibe</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Lake Bariga Mulewu</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Mushin Olosha</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Clinic Road, Adekunle</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Dadubule Street, Iwaya</p>
                </div>
                <div className="location_suggestion">
                    <p className="location">Adebanjo, Unilag Rd</p>
                </div>
            </div>
            <section className="icon_section bottom">
                <div className="icons_link">
                    <div className="icon_group">
                        <div>
                            <img src={senator_dark}/>
                        </div>
                        <h5>Reps</h5>
                    </div>
                    <div className="icon_group">
                        <div>
                            <img src={Group_dark}/>
                        </div>
                        <h5>Petitions</h5>
                    </div>
                    <div className="icon_group">
                        <div>
                            <img src={statistics_dark}/>
                        </div>
                        <h5>Feedbacks</h5>
                    </div>
                    <div className="icon_group">
                        <div>
                            <img src={Feedbacks_dark}/>
                        </div>
                        <h5>Reports</h5>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;