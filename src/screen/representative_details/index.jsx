import "./style.css";
import back_arrow_light from "../../assets/icons/back_arrow_light.svg";
import rep_circle from "../../assets/icons/rep_circle.png";
import telephone from "../../assets/icons/telephone.svg";
import location from "../../assets/icons/location.svg";
import white_arrow_down from "../../assets/icons/white_arrow_down.svg";
import right_dark_arrow from "../../assets/icons/right_dark_arrow.svg";
import arrow_right_green from "../../assets/icons/arrow_right_green.svg";
import Group_rating from "../../assets/icons/Group_rating.svg";
import arrow_down_colored from "../../assets/icons/arrow_down_colored.svg";
import representative_image1 from "../../assets/icons/representative_image1.png";
import green_filled from "../../assets/icons/green_filled.svg";
import representative_image2 from "../../assets/icons/representative_image2.png";
import representative_image3 from "../../assets/icons/representative_image3.png";
import RepsFooter from "../../components/headers/reps_footer_card";
function Representative_Details() {
    return(
        <>
        <div className="representative_details">
            <div className="representative_details_header">   
                 <div className="reps_inner_arrow_icon"><img src= {back_arrow_light} alt=""/></div> 
                <div className="reps_inner_rep_personal_page">
                    <div className="reps_inner_image_circle"><img src={rep_circle} alt=""/></div>
                    <div className="reps_inner_representative_group">
                    <h5 className="reps_inner_rep_circle_header">Sanusi Olawale Samson</h5>
                    <h6 className="reps_inner_rep_circle_last_header">LOCAL GOVT. CHAIRMAN</h6>
                    </div>
                    <div className="reps_inner_representative_cards">
                    <div className="reps_inner_petitions_rating">
                        <div className="reps_inner_text">
                        <p className="reps_inner_representative_petition">PETITIONS</p>
                        <h6 className="reps_inner_petition_number">20,257</h6>
                        </div>
                    </div>
                    <div className="reps_inner_petitions_rating">
                        <div className="reps_inner_text">
                        <p className="reps_inner_representative_petition">PETITIONS</p>
                        <h6 className="reps_inner_petition_number">20,257</h6>
                        </div>
                    </div>
                    <div className="reps_inner_petitions_rating">
                        <div className="reps_inner_text">
                        <p className="reps_inner_representative_petition">PETITIONS</p>
                        <h6 className="reps_inner_petition_number">20,257</h6>
                        </div>
                    </div>
                    </div>
                    <section>
                        <div className="reps_inner_call">
                        <div className="reps_inner_call_rep"><img src={telephone} alt=""/></div>
                        <h6 className="reps_inner_rep_number">0805-174-2253</h6>
                        </div>
                        <div className="reps_inner_rep_border_bottom"></div>
                    </section>
                    <section className="reps_inner_rep_location_section">
                        <div className="reps_inner_location">
                            <div className="reps_inner_location_icon"><img src={location} alt=""/></div>
                            <p className="reps_inner_real_location">16, Anthony Ajayi Street, off Fadayase close, Onike, Yaba Lagos.</p>
                        </div>
                    </section>
                    <h6 className="reps_inner_get_directions">Get Directions</h6>
                    <div className="reps_inner_arrow_white_down"><img src={white_arrow_down} alt=""/></div>
                </div>
            </div>
             <section className="reps_inner_petitions_details_section">
                <div className="reps_inner_petition_details_holder">
                <h6 className="reps_inner_rep_petition_response">SANUSI'S PETITION RESPONSE</h6>
                <h5 className="reps_inner_petition_details_header">End SARS, Stop Police Brutality and Reform The
                 Nigerian Police Force
                 </h5>
                <p className="reps_inner_petition_date_details">The government responded on 10 December 2020</p>
                <div className="reps_inner_petition_full_details_holder">
                <p className="reps_inner_petition_full_details">Landlords can seek possession where tenants have 14 days rent arrears, given emergency legislation, landlords must give 6 months’ notice in such cases before starting formal possession proceedings.</p>
                <div className="reps_inner_petition_full_dark_arrow"><img src={right_dark_arrow} alt=""/></div>
                </div>
                    <p className="reps_inner_full_response_link"><a href="#">Read the response in full</a></p>
                    <div className="reps_inner_response_border_bottom"></div>
                    <h5 className="reps_inner_petition_details_header">Increase uniform tax reliefs, especially for healthcare staff
                 </h5>
                <p className="reps_inner_petition_date_details">The government responded on 10 December 2020</p>
                <div className="reps_inner_petition_full_details_holder">
                <p className="reps_inner_petition_full_details">Employees can claim tax relief on the actual costs incurred in cleaning their uniforms. They should not be incurring costs in cleaning or maintaining PPE as this is the responsibility of employers.</p>
                <div className="reps_inner_petition_full_dark_arrow"><img src={right_dark_arrow} alt=""/></div>
                </div>
                    <p className="reps_inner_full_response_link"><a href="">Read the response in full</a></p>
            
                    <div className="reps_inner_response_border_bottom"></div>
                    <h5 className="reps_inner_petition_details_header">Increase uniform tax reliefs, especially for healthcare staff
                 </h5>
                <p className="reps_inner_petition_date_details">The government responded on 10 December 2020</p>
                <div className="reps_inner_petition_full_details_holder">
                <p className="reps_inner_petition_full_details">Employees can claim tax relief on the actual costs incurred in cleaning their uniforms. They should not be incurring costs in cleaning or maintaining PPE as this is the responsibility of employers.</p>
                <div className="reps_inner_petition_full_dark_arrow"><img src={right_dark_arrow}/></div>
                </div>
                    <p className="reps_inner_full_response_link"><a href="">Read the response in full</a></p>
                    <div className="reps_inner_response_border_bottom"></div>
                    <div className="reps_inner_view_all_responses_holder">
                    <div><img src={arrow_right_green}/></div>
                    <h5 className="reps_inner_view_all_responses">View All Responses</h5>
                </div>
                </div>
    </section> 
                 <footer className="rep_details_footer">
                    <div className="reps_inner_peoples_review_holder">
                    <h6 className="reps_inner_peoples_review_header">PEOPLE'S REVIEWS</h6>
                    <div className="representative_group">
                        <h3 className="representative_rating">4.1</h3>
                        <div className="representative_icon"><img src={Group_rating} alt=""/></div>
                        <p className="representative_response">Very Good</p>
                        <div className="representative_nav"><img src={arrow_down_colored} alt=""/></div>
                    </div>
                    <p className="rep_details_reviews">1,796 reviews</p>
                    <button className="reps_details_button">Write a Feedback</button>
                    <h3 className="reps_details_bottom_header">WHAT PEOPLE ARE SAYING</h3>
                    <div className="rep_details_people_image">
                       <div className="people_image"><img src={representative_image1} alt=""/></div>
                       <div className="test">
                       <p className="people_petitions">“We are asking that a Minister for Hospitality be created for the current, and successive governments.”</p>
                       <div className="people_petition_rating">
                       <h4>3.4</h4>
                       <div className="people_rating_section"><img className="people_rating_button" src={green_filled} alt=""/></div>
                       <p className="rating_date">20 Aug’ 2020</p>
                       </div>
                       </div>
                    </div>
                    <div className="rep_details_people_image">
                       <div className="people_image"><img src={representative_image2} alt=""/></div>
                       <div className="test">
                       <p className="people_petitions">“The SDLT holiday was designed to be a temporary relief. ”</p>
                       <div className="people_petition_rating">
                       <h4>4.7</h4>
                       <div className="people_rating_section"><img className="people_rating_button" src={green_filled} alt=""/></div>
                       <p className="rating_date">12 Jul’ 2020</p>
                       </div>
                       </div>
                    </div>
                    <div className="rep_details_people_image">
                       <div className="people_image"><img src={representative_image3} alt=""/></div>
                       <div className="test">
                       <p className="people_petitions">“Employees can claim tax relief on the actual costs incurred in cleaning their uniforms.”</p>
                       <div className="people_petition_rating">
                       <h4>3.8</h4>
                       <div className="people_rating_section"><img className="people_rating_button" src={green_filled}/></div>
                       <p className="rating_date">14 Feb’ 2020</p>
                       </div>
                       </div>
                    </div>
                    <div className="view_review_link">
                    <div><img src={arrow_right_green}/></div>
                    <h5 className="rep_header_reviews">View All User Reviews</h5>
                    </div>
                    </div>
                </footer> 
        </div>
                <RepsFooter/>
        </>
    )
}
export default Representative_Details;