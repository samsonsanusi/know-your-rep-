import "./style.css";
import back_arrow_light from "../assets/icons/back_arrow_light.svg";
import rep_circle from "../assets/icons/rep_circle.png";
import telephone from "../assets/icons/telephone.svg";
import location from "../assets/icons/location.svg";
import white_arrow_down from "../assets/icons/white_arrow_down.svg";
import right_dark_arrow from "../assets/icons/right_dark_arrow.svg";
import arrow_right_green from "../assets/icons/arrow_right_green.svg";

function Representative_Details() {
    return(
        <div className="representative_details">
            <header>   
                <div className="arrow_icon"><img className="arrow_icon_white"src= {back_arrow_light} alt=""/></div>
                <section className="rep_personal_page">
                    <div className="image_circle"><img src={rep_circle} alt=""/></div>
                    <div className="representative_group">
                    <h5 className="rep_circle_header">Sanusi Olawale Samson</h5>
                    <h6 className="rep_circle_last_header">LOCAL GOVT. CHAIRMAN</h6>
                    </div>
                    <div className="representative_cards">
                    <div className="petitions_rating">
                        <div className="text">
                        <p className="representative_petition">PETITIONS</p>
                        <h6 className="petition_number">20,257</h6>
                        </div>
                    </div>
                    <div className="petitions_rating">
                        <div className="text">
                        <p className="representative_petition">PETITIONS</p>
                        <h6 className="petition_number">20,257</h6>
                        </div>
                    </div>
                    <div className="petitions_rating">
                        <div className="text">
                        <p className="representative_petition">PETITIONS</p>
                        <h6 className="petition_number">20,257</h6>
                        </div>
                    </div>
                    </div>
                    <section>
                        <div className="call">
                        <div className="call_rep"><img src={telephone}/></div>
                        <h6 className="rep_number">0805-174-2253</h6>
                        </div>
                        <div className="rep_border_bottom"></div>
                    </section>
                    <section className="location_section">
                        <div className="location">
                            <div className="location_icon"><img src={location} alt=""/></div>
                            <p className="real_location">16, Anthony Ajayi Street, off Fadayase close, Onike, Yaba Lagos.</p>
                        </div>
                    </section>
                    <h6 className="get_directions">Get Directions</h6>
                    <div className="arrow_white_down"><img src={white_arrow_down} alt=""/></div>
                </section>
            </header>
            <section className="petitions_details_section">
                <div className="petition_details_holder">
                <h6 className="rep_petition_response">SANUSI'S PETITION RESPONSE</h6>
                <h5 className="petition_details_header">End SARS, Stop Police Brutality and Reform The
                 Nigerian Police Force
                 </h5>
                <p className="petition_date_details">The government responded on 10 December 2020</p>
                <div className="petition_full_details_holder">
                <p className="petition_full_details">Landlords can seek possession where tenants have 14 days rent arrears, given emergency legislation, landlords must give 6 months’ notice in such cases before starting formal possession proceedings.</p>
                <div className="petition_full_dark_arrow"><img src={right_dark_arrow}/></div>
                </div>
                    <p className="full_response_link"><a href="">Read the response in full</a></p>
                    <div className="response_border_bottom"></div>
                    <h5 className="petition_details_header">Increase uniform tax reliefs, especially for healthcare staff
                 </h5>
                <p className="petition_date_details">The government responded on 10 December 2020</p>
                <div className="petition_full_details_holder">
                <p className="petition_full_details">Employees can claim tax relief on the actual costs incurred in cleaning their uniforms. They should not be incurring costs in cleaning or maintaining PPE as this is the responsibility of employers.</p>
                <div className="petition_full_dark_arrow"><img src={right_dark_arrow}/></div>
                </div>
                    <p className="full_response_link"><a href="">Read the response in full</a></p>
            
                    <div className="response_border_bottom"></div>
                    <h5 className="petition_details_header">Increase uniform tax reliefs, especially for healthcare staff
                 </h5>
                <p className="petition_date_details">The government responded on 10 December 2020</p>
                <div className="petition_full_details_holder">
                <p className="petition_full_details">Employees can claim tax relief on the actual costs incurred in cleaning their uniforms. They should not be incurring costs in cleaning or maintaining PPE as this is the responsibility of employers.</p>
                <div className="petition_full_dark_arrow"><img src={right_dark_arrow}/></div>
                </div>
                    <p className="full_response_link"><a href="">Read the response in full</a></p>
                    <div className="response_border_bottom"></div>
                    <div className="view_all_responses_holder">
                    <div><img src={arrow_right_green}/></div>
                    <h5 className="view_all_responses">View All Responses</h5>
                </div>
                </div>
            </section>
                <footer className="peoples_review_footer">
                    <div className="peoples_review_holder">
                    <h6 className="peoples_review_header">PEOPLE'S REVIEW</h6>
                    </div>
                </footer>
        </div>
    )
}
export default Representative_Details;