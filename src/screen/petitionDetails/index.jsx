/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import Logo_light from "../../assets/icons/Logo_light.svg";
import back_arrow_light from "../../assets/icons/back_arrow_light.svg";
import filter_list from "../../assets/icons/filter_list.svg";
import arrow_right_green from "../../assets/icons/arrow_right_green.svg";
import arrow_right_white from "../../assets/icons/arrow_right_white.svg";
import { Progress } from "antd";
import message_icon from "../../assets/icons/message_icon.svg";
import mail_icon from "../../assets/icons/mail_icon.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter_icon from "../../assets/icons/twitter_icon.svg";
import RepsFooter from "../../components/headers/reps_footer_card";
function PetitionDetails() {
    return (
        <div className="petition_names">
            <header className="petition-details-header">
                <div className="petition__details__nav">
                    <div className="ella">
                        <img src={Logo_light} alt="" />
                    </div>
                    <img src={back_arrow_light} alt="" />
                </div>
            </header>
            <div className="filter_section">
                <h3 className="filter_header">PETITIONS</h3>
                <div className="filter_icon">
                    <img src={filter_list} alt="" />
                    <h6 className="filter_text">Filters</h6>
                </div>
            </div>
            <div className="petition--details-section">
                <h5 className="petition__details__mainHeader">
                    End SARS, Stop Police Brutality and Reform The Nigerian
                    Police Force
                </h5>
                <p className="petition__details__mainPara">
                    The UK hospitality industry. Responsible for around 3m jobs,
                    generating £130bn in activity, resulting in £38bn in
                    taxation. Yet, unlike the Arts or Sports, we do not have a
                    dedicated Minister.
                </p>
                <p className="petition__details__mainPara2">
                    We are asking that a Minister for Hospitality be created for
                    the current, and successive governments.
                </p>
                <div className="petition--details--signPetition">
                    <div className="petition__details__moreDetailsLink">
                        <img
                            src={arrow_right_green}
                            alt=""
                            className="petition_details_rightColoredArrow"
                        />
                        <h6 className="petition__details_leastHeader">
                            More Details
                        </h6>
                    </div>
                    <button className="petition__details__signPetitionBtn">
                        Sign this Petition
                        <img
                            src={arrow_right_white}
                            className="petition__details__rightWhiteArrow"
                            alt="rightArrowNavigation"
                        />
                    </button>
                </div>
                <div className="petition_rating_footer">
                    <h2 className="petition_footer_number">75,746</h2>
                    <span className="petition_footer_signature">
                        signatures
                    </span>
                    <div className="petition_footer_div">
                        <span className="petition_target petition__details__percentage">
                            Target:{" "}
                            <span className="petition_target_number">
                                100,000
                            </span>
                        </span>
                    </div>
                </div>
                <div className="progress_bar" style={{ width: 315 }}>
                    <Progress
                        percent={50}
                        size="small"
                        status="active"
                        strokeColor="#D9A01B"
                        showInfo={false}
                    />
                </div>
                <h3 className="petition__details__coloredHeader">
                    GOVERNMENT RESPONDED
                </h3>
                <p className="petition__details__responsePara">
                    The government responded on 10 December 2020
                </p>
                <p className="petition__details__detailedPara">
                    Landlords can seek possession where tenants have 14 days
                    rent arrears, given emergency legislation, landlords must
                    give 6 months’ notice in such cases before starting formal
                    possession proceedings.
                </p>
                <a href="" className="petition__details__fullResponse">
                    Read the response in full
                </a>
                <h3 className="petition__details__coloredHeader">
                    AT 100,000 SIGNATURES....
                </h3>
                <p className="petition__details__paraSignature">
                    At 100,000 signatures, this petition will be considered for
                    debate in Parliament
                </p>
                <div className="petition__details__socials">
                    <div className="petition__details__message">
                        <img src={message_icon} alt="" />
                    </div>
                    <div className="petition__details__email">
                        <img src={mail_icon} alt="" />
                    </div>
                    <div className="petition__details__facebook">
                        <img src={facebook} alt="" className="facebook" />
                    </div>
                    <div className="petition__details__twitter">
                        <img src={twitter_icon} alt="" />
                    </div>
                </div>
                <div className="petition--details--personalDetails">
                    <p className="petition__details__dateCreated">Created By</p>
                    <h3 className="petition__details__footerHeader">
                        Blessing Toyosi Amuda
                    </h3>
                </div>
                <div className="petition--details--personalDetails">
                    <p className="petition__details__dateCreated">Deadline</p>
                    <h3 className="petition__details__footerHeader">
                        6 April 2021
                    </h3>
                    <p className="petition__details__footerPara">
                        All petitions run for 6 months
                    </p>
                </div>
            </div>
            <RepsFooter />
        </div>
    );
}
export default PetitionDetails;
