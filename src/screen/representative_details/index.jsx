import "./style.css";
import back_arrow_light from "../../assets/icons/back_arrow_light.svg";
import rep_circle from "../../assets/icons/rep_circle.png";
import telephone from "../../assets/icons/telephone.svg";
import location from "../../assets/icons/location.svg";
import white_arrow_down from "../../assets/icons/white_arrow_down.svg";
import right_dark_arrow from "../../assets/icons/right_dark_arrow.svg";
import arrow_right_green from "../../assets/icons/arrow_right_green.svg";

function Representative_Details() {
    return(
        <div className="representative_details">
            <header>   
                <div className="reps_inner_arrow_icon"><img className="arrow_icon_white"src= {back_arrow_light} alt=""/></div>
                <section className="reps_inner_rep_personal_page">
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
                        <div className="reps_inner_call_rep"><img src={telephone}/></div>
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
                </section>
            </header>
            {/* <section className="reps_inner_petitions_details_section">
                <div className="reps_inner_petition_details_holder">
                <h6 className="reps_inner_rep_petition_response">SANUSI'S PETITION RESPONSE</h6>
                <h5 className="reps_inner_petition_details_header">End SARS, Stop Police Brutality and Reform The
                 Nigerian Police Force
                 </h5>
                <p className="reps_inner_petition_date_details">The government responded on 10 December 2020</p>
                <div className="reps_inner_petition_full_details_holder">
                <p className="reps_inner_petition_full_details">Landlords can seek possession where tenants have 14 days rent arrears, given emergency legislation, landlords must give 6 months’ notice in such cases before starting formal possession proceedings.</p>
                <div className="reps_inner_petition_full_dark_arrow"><img src={right_dark_arrow}/></div>
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
            </section> */}
                {/* <footer className="reps_inner_peoples_review_footer">
                    <div className="reps_inner_peoples_review_holder">
                    <h6 className="reps_inner_peoples_review_header">PEOPLE'S REVIEW</h6>
                    </div>
                </footer> */}
        </div>
    )
}
export default Representative_Details;