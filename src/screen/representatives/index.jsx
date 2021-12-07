import "./style.css";
import {useState} from "react";
import filter_list from "../../assets/icons/filter_list.svg";
import Oval_rep from "../../assets/icons/Oval_rep.svg";
import Abdulai_img from "../../assets/icons/Abdulai_img.png";
import tosin_rep from "../../assets/icons/tosin_rep.png";
import joseph_rep from "../../assets/icons/joseph_rep.png";
import tinubu_rep from "../../assets/icons/tinubu_rep.png";
import dino_rep from "../../assets/icons/dino_rep.png";
import HeaderOne from "../../components/headers/headerOne.js";

function Representatives(){

    return(
        <div className="representatives">
            <HeaderOne />
            <section className="filter_name_section">
                <div className="filter_section">
                <h3 className="filter_header">REPRESENTATIVES</h3>
                <div className="filter_icon">
                    <img src={filter_list} alt=""/>
                    <h6 className="filter_text">Filters</h6>
                </div>
                </div>
            </section>
            <section className="representative_main">
                <div className="representative_inner_details">
                    <div>
                    <h6 className="representative_position">COUNCILLOR</h6>
                    <h5 className="representative_name">Abdulahi Abubakar</h5>
                    <p className="representative_jurisdiction">Onike, Yaba, Lagos • 2.4 kms away</p>
                    <div className="rating_group">
                        <h4 className="rep_rating_colored">3.8</h4>
                        <div className="rep_rating_button"><img className="inner_rep_button" src={Oval_rep} alt=""/></div>
                        <p className="colored_rating_review">982 Reviews</p>
                    </div>
                    </div>
                    <div className="representative_image"><img src={Abdulai_img} alt=""/></div>
                </div>
                <div className="representative_inner_details">
                    <div>
                    <h6 className="representative_position">COUNCILLOR</h6>
                    <h5 className="representative_name">Abdulahi Abubakar</h5>
                    <p className="representative_jurisdiction">Onike, Yaba, Lagos • 2.4 kms away</p>
                    <div className="rating_group">
                        <h4 className="rep_rating_colored">3.8</h4>
                        <div className="rep_rating_button"><img className="inner_rep_button" src={Oval_rep} alt=""/></div>
                        <p className="colored_rating_review">419 Reviews</p>
                    </div>
                    </div>
                    <div className="representative_image"><img src={tosin_rep} alt=""/></div>
                </div>
                <div className="representative_inner_details">
                    <div>
                    <h6 className="representative_position">COUNCILLOR</h6>
                    <h5 className="representative_name">Abdulahi Abubakar</h5>
                    <p className="representative_jurisdiction">Onike, Yaba, Lagos • 2.4 kms away</p>
                    <div className="rating_group">
                        <h4 className="rep_rating_colored">3.8</h4>
                        <div className="rep_rating_button"><img className="inner_rep_button" src={Oval_rep} alt=""/></div>
                        <p className="colored_rating_review">258 Reviews</p>
                    </div>
                    </div>
                    <div className="representative_image"><img src={joseph_rep} alt=""/></div>
                </div>
                <div className="representative_inner_details">
                    <div>
                    <h6 className="representative_position">COUNCILLOR</h6>
                    <h5 className="representative_name">Abdulahi Abubakar</h5>
                    <p className="representative_jurisdiction">Onike, Yaba, Lagos • 2.4 kms away</p>
                    <div className="rating_group">
                        <h4 className="rep_rating_colored">3.8</h4>
                        <div className="rep_rating_button"><img className="inner_rep_button" src={Oval_rep} alt=""/></div>
                        <p className="colored_rating_review">419 Reviews</p>
                    </div>
                    </div>
                    <div className="representative_image"><img src={tinubu_rep} alt=""/></div>
                </div>
                <div className="representative_inner_details">
                    <div>
                    <h6 className="representative_position">COUNCILLOR</h6>
                    <h5 className="representative_name">Abdulahi Abubakar</h5>
                    <p className="representative_jurisdiction">Onike, Yaba, Lagos • 2.4 kms away</p>
                    <div className="rating_group">
                        <h4 className="rep_rating_colored">3.8</h4>
                        <div className="rep_rating_button"><img className="inner_rep_button" src={Oval_rep} alt=""/></div>
                        <p className="colored_rating_review">982 Reviews</p>
                    </div>
                    </div>
                    <div className="representative_image"><img src={dino_rep} alt =""/></div>
                </div>
                <div className="representative_inner_details">
                    <div>
                    <h6 className="representative_position">COUNCILLOR</h6>
                    <h5 className="representative_name">Abdulahi Abubakar</h5>
                    <p className="representative_jurisdiction">Onike, Yaba, Lagos • 2.4 kms away</p>
                    <div className="rating_group">
                        <h4 className="rep_rating_colored">3.8</h4>
                        <div className="rep_rating_button"><img className="inner_rep_button" src={Oval_rep} alt=""/></div>
                        <p className="colored_rating_review">258 Reviews</p>
                    </div>
                    </div>
                    <div className="representative_image"><img src={joseph_rep} alt=""/></div>
                </div>
            </section>
            
        </div>
    )
}
export default Representatives;