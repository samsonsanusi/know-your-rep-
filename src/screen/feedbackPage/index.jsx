import "./style.css";
import HeaderOne from "../../components/headers/headerOne.js";
import filter_list from "../../assets/icons/filter_list.svg";
import Oval2 from "../../assets/icons/Oval2.png";
import imgg from "../../assets/icons/imgg.png";
function FeedbackPage() {
    return (
        <div className="feedback_page">
            <HeaderOne />
            <div className="filter_section">
                <h3 className="filter_header">PETITIONS</h3>
                <div className="filter_icon">
                    <img src={filter_list} alt="" />
                    <h6 className="filter_text">Filters</h6>
                </div>
            </div>
            <div className="feedBack--body">
                <div className="feedBack__card">
                    <div className="feedBack__representative">
                        <span className="feedBack__to">to:</span>
                        <h3 className="feedBack__repName">Garba Lawal</h3>
                        <h6 className="feedBack__rep_position">
                            LOCAL GOVT. CHAIRMAN
                        </h6>
                    </div>

                    <div className="feedBack__article">
                        <div className="feedBack__content">
                            <p className="feedBack__mainPara">
                                “Growing up in the country, our parents,
                                teachers and elders taught us that youths are
                                the leaders of tomorrow.”
                            </p>
                            <div className="feedBack__img">
                                <img
                                    src={imgg}
                                    className="rep_image"
                                    alt="repImage"
                                />
                            </div>
                        </div>
                        <div className="feedBack__rating">
                            <h4 className="feedBack__ratingHeader">4.4</h4>
                            <div className="feedBack__ratingBtn">
                                <img
                                    src={Oval2}
                                    className="feedBack__innerBtn"
                                    alt="icon"
                                />
                            </div>
                            <p className="feedBack__repLocation">
                                Akoka, Bariga, Lagos • 1.8 kms away
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feedBack__card">
                    <div className="feedBack__representative">
                        <span className="feedBack__to">to:</span>
                        <h3 className="feedBack__repName">Garba Lawal</h3>
                        <h6 className="feedBack__rep_position">
                            LOCAL GOVT. CHAIRMAN
                        </h6>
                    </div>

                    <div className="feedBack__article">
                        <div className="feedBack__content">
                            <p className="feedBack__mainPara">
                                “Growing up in the country, our parents,
                                teachers and elders taught us that youths are
                                the leaders of tomorrow.”
                            </p>
                            <div className="feedBack__img">
                                <img
                                    src={imgg}
                                    className="rep_image"
                                    alt="repImage"
                                />
                            </div>
                        </div>
                        <div className="feedBack__rating">
                            <h4 className="feedBack__ratingHeader">4.4</h4>
                            <div className="feedBack__ratingBtn">
                                <img
                                    src={Oval2}
                                    className="feedBack__innerBtn"
                                    alt="feedbackBtn"
                                />
                            </div>
                            <p className="feedBack__repLocation">
                                Akoka, Bariga, Lagos • 1.8 kms away
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feedBack__card">
                    <div className="feedBack__representative">
                        <span className="feedBack__to">to:</span>
                        <h3 className="feedBack__repName">Abubakar Wemimo</h3>
                        <h6 className="feedBack__rep_position">COUNCILLOR</h6>
                    </div>

                    <div className="feedBack__article">
                        <div className="feedBack__content">
                            <p className="feedBack__mainPara">
                                “Growing up in the country, our parents,
                                teachers and elders taught us that youths are
                                the leaders of tomorrow.”
                            </p>
                            <div className="feedBack__img">
                                <img
                                    src={imgg}
                                    className="rep_image"
                                    alt="repImage"
                                />
                            </div>
                        </div>
                        <div className="feedBack__rating">
                            <h4 className="feedBack__ratingHeader">4.4</h4>
                            <div className="feedBack__ratingBtn">
                                <img
                                    src={Oval2}
                                    className="feedBack__innerBtn"
                                    alt="icon"
                                />
                            </div>
                            <p className="feedBack__repLocation">
                                Akoka, Bariga, Lagos • 1.8 kms away
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feedBack__card">
                    <div className="feedBack__representative">
                        <span className="feedBack__to">to:</span>
                        <h3 className="feedBack__repName">
                            Tosin Amuda Joseph
                        </h3>
                        <h6 className="feedBack__rep_position">
                            HOUSE OF REPRESENTATIVE
                        </h6>
                    </div>

                    <div className="feedBack__article">
                        <div className="feedBack__content">
                            <p className="feedBack__mainPara">
                                “Growing up in the country, our parents,
                                teachers and elders taught us that youths are
                                the leaders of tomorrow.”
                            </p>
                            <div className="feedBack__img">
                                <img
                                    src={imgg}
                                    className="rep_image"
                                    alt="repImage"
                                />
                            </div>
                        </div>
                        <div className="feedBack__rating">
                            <h4 className="feedBack__ratingHeader">4.4</h4>
                            <div className="feedBack__ratingBtn">
                                <img
                                    src={Oval2}
                                    className="feedBack__innerBtn"
                                    alt="icon"
                                />
                            </div>
                            <p className="feedBack__repLocation">
                                Akoka, Bariga, Lagos • 1.8 kms away
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feedBack__card">
                    <div className="feedBack__representative">
                        <span className="feedBack__to">to:</span>
                        <h3 className="feedBack__repName">
                            Sanusi Olawale Samson
                        </h3>
                        <h6 className="feedBack__rep_position">
                            STATE OF ASSEMBLY
                        </h6>
                    </div>

                    <div className="feedBack__article">
                        <div className="feedBack__content">
                            <p className="feedBack__mainPara">
                                “Growing up in the country, our parents,
                                teachers and elders taught us that youths are
                                the leaders of tomorrow.”
                            </p>
                            <div className="feedBack__img">
                                <img src={imgg} alt="rep_image" />
                            </div>
                        </div>
                        <div className="feedBack__rating">
                            <h4 className="feedBack__ratingHeader">4.4</h4>
                            <div className="feedBack__ratingBtn">
                                <img
                                    src={Oval2}
                                    className="feedBack__innerBtn"
                                    alt="icon"
                                />
                            </div>
                            <p className="feedBack__repLocation">
                                Akoka, Bariga, Lagos • 1.8 kms away
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feedBack__card">
                    <div className="feedBack__representative">
                        <span className="feedBack__to">to:</span>
                        <h3 className="feedBack__repName">OGBEUN SIMIDELE</h3>
                        <h6 className="feedBack__rep_position">
                            LOCAL GOVT. CHAIRMAN
                        </h6>
                    </div>

                    <div className="feedBack__article">
                        <div className="feedBack__content">
                            <p className="feedBack__mainPara">
                                “Growing up in the country, our parents,
                                teachers and elders taught us that youths are
                                the leaders of tomorrow.”
                            </p>
                            <div className="feedBack__img">
                                <img src={imgg} alt="rep_image" />
                            </div>
                        </div>
                        <div className="feedBack__rating">
                            <h4 className="feedBack__ratingHeader">4.4</h4>
                            <div className="feedBack__ratingBtn">
                                <img
                                    src={Oval2}
                                    className="feedBack__innerBtn"
                                    alt="icon"
                                />
                            </div>
                            <p className="feedBack__repLocation">
                                Akoka, Bariga, Lagos • 1.8 kms away
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FeedbackPage;
