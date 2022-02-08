import "./style.css";
import HeaderOne from "../../components/headers/headerOne.js";
import filter_list from "../../assets/icons/filter_list.svg";
import keyboard_backspace from "../../assets/icons/keyboard_backspace.svg";
import Shape from "../../assets/icons/icon/Shape.svg";
import RepsFooter from "../../components/headers/reps_footer_card";
import peti from "../../assets/icons/peti.svg";
import { Progress } from "antd";

function Petition_page() {
    return (
        <div className="petition_page">
            <HeaderOne />
            <div className="filter_section">
                <h3 className="filter_header">PETITIONS</h3>
                <div className="filter_icon">
                    <img src={filter_list} alt="" />
                    <h6 className="filter_text">Filters</h6>
                </div>
            </div>
            <div className="people_petition">
                <div className="petition_number">
                    <div className="petition_inner">
                        <h3 className="petition_header">254</h3>
                        <p className="petition_para">
                            Petitions got a response from the Government
                        </p>
                    </div>
                    <div className="petition_inner inner_inner">
                        <h3 className="petition_header">43</h3>
                        <p className="petition_para">
                            Petitions were debated in the House of Commons
                        </p>
                    </div>
                </div>
            </div>
            <div className="border_bottom"></div>

            <div className="people_petition main_main">
                <div className="petition_signatures">
                    <h5 className="petition_main_Header">
                        End SARS, Stop Police Brutality and Reform The Nigerian
                        Police Force
                    </h5>
                    <p className="petition_para_body">
                        75,746
                        <span className="petition_span_body">
                            signatures in the last hour
                        </span>
                    </p>
                </div>

                <div className="petition_signatures">
                    <h5 className="petition_main_Header">
                        End child food poverty – no child should be going hungry
                    </h5>
                    <p className="petition_para_body">
                        1,103,940
                        <span className="petition_span_body">
                            signatures in the last hour
                        </span>
                    </p>
                </div>

                <div className="petition_signatures">
                    <h5 className="petition_main_Header">
                        Reclose schools and colleges due to increase in COVID-19
                        cases
                    </h5>
                    <p className="petition_para_body">
                        417,325
                        <span className="petition_span_body">
                            signatures in the last hour
                        </span>
                    </p>
                </div>

                <div className="sam">
                    <div className="petition_signatures">
                        <h5 className="petition_main_Header">
                            Limit the Sale and Use of Fireworks to Organisers of
                            Licensed Displays Only
                        </h5>
                        <div>
                            <p className="petition_para_body">
                                279,372
                                <span className="petition_span_body">
                                    signatures in the last hour
                                </span>
                            </p>
                            <div className="plus">
                                <img
                                    src={Shape}
                                    className="real"
                                    alt=""
                                    className="add_petition_icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="petition_signatures">
                    <h5 className="petition_main_Header">
                        End SARS, Stop Police Brutality and Reform The Nigerian
                        Police Force
                    </h5>
                    <p className="petition_para_body">
                        75,746
                        <span className="petition_span_body">
                            signatures in the last hour
                        </span>
                    </p>
                </div>
                <div className="petition_more">
                    <div className="colored_arrow">
                        <img src={keyboard_backspace} alt="" />
                    </div>
                    <h3 className="colored_header">View All Representatives</h3>
                </div>
            </div>
            <section id="petition_main">
                <div className="petition_footer">
                    <h3 className="petition_footer_header">
                        POPULAR PETITIONS
                    </h3>
                </div>
                <div className="petition_background">
                    <div className="petition_text">
                        <h3 className="petition_footer_h3">
                            Create a Minister for Hospitality in the Nigerian
                            Government
                        </h3>
                        <div className="petition_rating_footer">
                            <h2 className="petition_footer_number">75,746</h2>
                            <span className="petition_footer_signature">
                                signatures
                            </span>
                            <div className="petition_footer_div">
                                <span className="petition_target">
                                    Target:{" "}
                                    <span className="petition_target_number">
                                        100,000
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="progress_bar" style={{ width: 300 }}>
                            <Progress
                                percent={50}
                                size="small"
                                status="active"
                                strokeColor="#D9A01B"
                                showInfo={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="petition_background box">
                    <div className="petition_text">
                        <h3 className="petition_footer_h3">
                            Create a Minister for Hospitality in the Nigerian
                            Government
                        </h3>
                        <div className="petition_rating_footer">
                            <h2 className="petition_footer_number">75,746</h2>
                            <span className="petition_footer_signature">
                                signatures
                            </span>
                            <div className="petition_footer_div">
                                <span className="petition_target">
                                    Target:{" "}
                                    <span className="petition_target_number">
                                        100,000
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="progress_bar" style={{ width: 300 }}>
                            <Progress
                                percent={80}
                                size="small"
                                status="active"
                                strokeColor="#D9A01B"
                            />
                        </div>
                    </div>
                </div>
                <div className="petition_background box">
                    <div className="petition_text">
                        <h3 className="petition_footer_h3">
                            Create a Minister for Hospitality in the Nigerian
                            Government
                        </h3>
                        <div className="petition_rating_footer">
                            <h2 className="petition_footer_number">75,746</h2>
                            <span className="petition_footer_signature">
                                signatures
                            </span>
                            <div className="petition_footer_div">
                                <span className="petition_target">
                                    Target:{" "}
                                    <span className="petition_target_number">
                                        100,000
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="progress_bar" style={{ width: 300 }}>
                            <Progress
                                percent={50}
                                size="small"
                                status="active"
                                strokeColor="#D9A01B"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <h3 className="petition_govt_response">GOVERNMENT RESPONSES</h3>
            <section className="OLA">
                <div className="petition_white_footer">
                    <div className="petition_group_holder">
                        <h3 className="petition_main_issue">
                            Allow Landlords to evict tenants where there are 14
                            days rent arrears
                        </h3>
                        <span className="petition_date">
                            The government responded on 10 December 2020
                        </span>
                        <div className="petition_arrow">
                            <p className="petition_more_details">
                                Landlords can seek possession where tenants have
                                14 days rent arrears, given emergency
                                legislation, landlords must give 6 months’
                                notice in such cases before starting formal
                                possession proceedings.
                            </p>
                            <img
                                src={peti}
                                alt=""
                                className="petition_arrow_greater"
                            />
                        </div>
                        <a href="" className="petition_full_link">
                            Read the response in full
                        </a>
                    </div>
                    <div className="petition_group_holder">
                        <h3 className="petition_main_issue">
                            Allow Landlords to evict tenants where there are 14
                            days rent arrears
                        </h3>
                        <span className="petition_date">
                            The government responded on 10 December 2020
                        </span>
                        <div className="petition_arrow">
                            <p className="petition_more_details">
                                Landlords can seek possession where tenants have
                                14 days rent arrears, given emergency
                                legislation, landlords must give 6 months’
                                notice in such cases before starting formal
                                possession proceedings.
                            </p>
                            <img
                                src={peti}
                                alt=""
                                className="petition_arrow_greater"
                            />
                        </div>
                        <a href="" className="petition_full_link">
                            Read the response in full
                        </a>
                    </div>
                    <div className="petition_group_holder">
                        <h3 className="petition_main_issue">
                            Allow Landlords to evict tenants where there are 14
                            days rent arrears
                        </h3>
                        <span className="petition_date">
                            The government responded on 10 December 2020
                        </span>
                        <div className="petition_arrow ">
                            <p className="petition_more_details">
                                Landlords can seek possession where tenants have
                                14 days rent arrears, given emergency
                                legislation, landlords must give 6 months’
                                notice in such cases before starting formal
                                possession proceedings.
                            </p>
                            <img
                                src={peti}
                                alt=""
                                className="petition_arrow_greater"
                            />
                        </div>
                        <a href="" className="petition_full_link">
                            Read the response in full
                        </a>
                    </div>
                    <div className="petition_more">
                        <div className="colored_arrow">
                            <img src={keyboard_backspace} alt="" />
                        </div>
                        <h3 className="colored_header">View All Responses</h3>
                    </div>
                </div>
            </section>
            <RepsFooter />
        </div>
    );
}
export default Petition_page;
