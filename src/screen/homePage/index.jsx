import "./style.css";
import senator from "../../assets/icons/senator.png";
import Oval from "../../assets/icons/Oval.png";
import Vector from "../../assets/icons/Vector.svg";
import Group from "../../assets/icons/Group.svg";
import statistics from "../../assets/icons/statistics.svg";
import local_offer_material from "../../assets/icons/local_offer_material.svg";
import Rectangle_Copy from "../../assets/icons/Rectangle_Copy.png";
import Oval2 from "../../assets/icons/Oval2.png";
import Rectangle_rep1 from "../../assets/icons/Rectangle_rep1.png";
import Rectangle_rep2 from "../../assets/icons/Rectangle_rep2.png";
import Rectangle_rep3 from "../../assets/icons/Rectangle_rep3.png";
import keyboard_backspace from "../../assets/icons/keyboard_backspace.svg";
import keyboard_backspace_white from "../../assets/icons/keyboard_backspace_white.svg";
import Navbar from "../../components/navbar";
import { Progress } from "antd";
import HeaderTwo from "../../components/headers/headerTwo";

function Homepage() {
    return (
        <div className="homepage">
            <HeaderTwo />
            <section className="main_page">
                <div>
                    <h1 className="main_header">
                        Know your local area representatives.
                    </h1>
                </div>
                {/* search bar */}
                {/* <div className="home_search_section"> */}
                <div className="search_input">
                    <form>
                        <div className="home_form">
                            <input
                                type="text"
                                className="home_input_address"
                                placeholder="Anthony Ajayi, Onike, Yaba, Lagos"
                            ></input>
                            <div>
                                <img
                                    className="home_search_icon"
                                    src={Oval}
                                    alt=""
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* </div> */}
            </section>
            {/* features */}
            <div className="features_section">
                <div className="icon_style">
                    <div className="icon_background">
                        <img className="icons" src={senator} alt="" />
                    </div>
                    <h5 className="text">Reps</h5>
                </div>

                <div className="icon_style">
                    <div img className="icon_background petition">
                        <img className="icons petitions" src={Vector} alt="" />
                    </div>
                    <h5 className="text">Petitions</h5>
                </div>

                <div className="icon_style">
                    <div className="icon_background feedback">
                        <img className="icons feedbacks" src={Group} alt="" />
                    </div>
                    <h5 className="text">Feedbacks</h5>
                </div>

                <div className="icon_style">
                    <div className="icon_background report">
                        <img
                            className="icons reports"
                            src={statistics}
                            alt=""
                        />
                    </div>
                    <h5 className="text">Reports</h5>
                </div>
            </div>
            <div className="home_question_section">
                <div className="home_question_background">
                    <img className="lock" src={local_offer_material} alt="" />
                    <p className="home_para_question">
                        Answer these questions &{" "}
                        <span className="home_span">Get N1,000 Voucher</span>
                    </p>
                </div>
            </div>
            <section className="reps">
                <h3 className="reps_header">POPULAR REPRESENTATIVES</h3>
                <div className="reps_section">
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_Copy}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">
                                HOUSE OF REPRESENTATIVE{" "}
                            </h6>
                            <h5 className="reps_name">Shina Peller</h5>
                            <p className="reps_constituency">QUILOX, Lagos</p>
                            <div className="rating">
                                <h4 className="rating_number">4.5</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">419 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_rep1}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">
                                STATE REPRESENTATIVE{" "}
                            </h6>
                            <h5 className="reps_name">Abdulahi Abubakar</h5>
                            <p className="reps_constituency">
                                Onike, Yaba, Lagos
                            </p>
                            <div className="rating">
                                <h4 className="rating_number">3.4</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">98 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_rep2}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">SENATE PRESIDENT</h6>
                            <h5 className="reps_name">Mohammadu Malami</h5>
                            <p className="reps_constituency">Danfodio, Abuja</p>
                            <div className="rating">
                                <h4 className="rating_number">5.0</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">319 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_rep3}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">
                                HOUSE OF REPRESENTATIVE{" "}
                            </h6>
                            <h5 className="reps_name">Shina Peller</h5>
                            <p className="reps_constituency">QUILOX, Lagos</p>
                            <div className="rating">
                                <h4 className="rating_number">4.5</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">419 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="icon_section">
                <Navbar />
            </section>
            <section className="reps">
                <h3 className="reps_header">TOP RATED REPRESENTATIVES</h3>
                <div className="reps_section">
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_rep2}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">SENATE PRESIDENT</h6>
                            <h5 className="reps_name">Mohammadu Malami</h5>
                            <p className="reps_constituency">Danfodio, Abuja</p>
                            <div className="rating">
                                <h4 className="rating_number">5.0</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">319 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_rep1}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">
                                STATE REPRESENTATIVE{" "}
                            </h6>
                            <h5 className="reps_name">Abdulahi Abubakar</h5>
                            <p className="reps_constituency">
                                Onike, Yaba, Lagos
                            </p>
                            <div className="rating">
                                <h4 className="rating_number">3.4</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">98 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_Copy}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">
                                HOUSE OF REPRESENTATIVE{" "}
                            </h6>
                            <h5 className="reps_name">Shina Peller</h5>
                            <p className="reps_constituency">QUILOX, Lagos</p>
                            <div className="rating">
                                <h4 className="rating_number">4.5</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">419 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            className="senator_images"
                            src={Rectangle_rep3}
                            alt=""
                        />
                        <div className="container">
                            <h6 className="reps_position">
                                HOUSE OF REPRESENTATIVE{" "}
                            </h6>
                            <h5 className="reps_name">Shina Peller</h5>
                            <p className="reps_constituency">QUILOX, Lagos</p>
                            <div className="rating">
                                <h4 className="rating_number">4.5</h4>
                                <div className="rating_button ">
                                    <img
                                        className="filled_background"
                                        src={Oval2}
                                        alt=""
                                    />
                                </div>
                                <p className="reviews">419 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="reps view_all">
                <div className="colored_arrow">
                    <img src={keyboard_backspace} alt="" />
                </div>
                <h3 className="colored_header">View All Representatives</h3>
            </div>
            <section className="home_footer_section">
                <div className="reps footer_footer">
                    <h3 className="reps_header footer">PETITIONS AROUND YOU</h3>
                    <div className="footer_white_bg">
                        <div className="home_footer_content">
                            <h3 className="footer_content_header">
                                Create a Minister for Hospitality in the
                                Nigerian Government
                            </h3>
                            <div className="inner_footer_content">
                                <h2 className="inner_footer_content_header">
                                    75,746
                                </h2>
                                <p className="inner_footer_content_para1">
                                    signatures
                                </p>
                                <p className="inner_footer_content_para2">
                                    Target:{" "}
                                    <span className="home_footer_number">
                                        100,000
                                    </span>
                                </p>
                            </div>
                            <div
                                className="progress_bar"
                                style={{ width: 300 }}
                            >
                                <Progress
                                    percent={50}
                                    size="small"
                                    status="active"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="footer_white_bg">
                        <div className="home_footer_content">
                            <h3 className="footer_content_header">
                                Create a Minister for Hospitality in the
                                Nigerian Government
                            </h3>
                            <div className="inner_footer_content">
                                <h2 className="inner_footer_content_header">
                                    75,746
                                </h2>
                                <p className="inner_footer_content_para1">
                                    signatures
                                </p>
                                <p className="inner_footer_content_para2">
                                    Target:{" "}
                                    <span className="home_footer_number">
                                        100,000
                                    </span>
                                </p>
                            </div>
                            <div
                                className="progress_bar"
                                style={{ width: 300 }}
                            >
                                <Progress
                                    percent={80}
                                    size="small"
                                    status="active"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="footer_white_bg">
                        <div className="home_footer_content">
                            <h3 className="footer_content_header">
                                Create a Minister for Hospitality in the
                                Nigerian Government
                            </h3>
                            <div className="home_inner_footer_content">
                                <h2 className="inner_footer_content_header">
                                    75,746
                                </h2>
                                <p className="inner_footer_content_para1">
                                    signatures
                                </p>
                                <p className="inner_footer_content_para2">
                                    Target:{" "}
                                    <span className="home_footer_number">
                                        100,000
                                    </span>
                                </p>
                            </div>
                            <div
                                className="progress_bar"
                                style={{ width: 300 }}
                            >
                                <Progress
                                    percent={40}
                                    size="small"
                                    status="active"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="reps view_all home_white">
                        <div className="colored_arrow">
                            <img src={keyboard_backspace_white} alt="" />
                        </div>
                        <h3 className="colored_header footer_header">
                            View All Representatives
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Homepage;
