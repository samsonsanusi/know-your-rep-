import "./style.css";
import HeaderOne from "../../components/headers/headerOne.js";
import filter_list from "../../assets/icons/filter_list.svg";

function Petition_page(){
    return(
        <div className="petition_page">
            <HeaderOne />
            <div className="filter_section">
            <h3 className="filter_header">REPRESENTATIVES</h3>
                <div className="filter_icon">
                    <img src={filter_list} alt=""/>
                    <h6 className="filter_text">Filters</h6>
                </div>
            </div>
            <div className="people_petition">
                <div className="petition_number">
                    <div className="petition_inner">
                        <h3 className="petition_header">254</h3>
                        <p className="petition_para">Petitions got a response from the Government</p>
                    </div>
                    <div className="petition_inner">
                        <h3 className="petition_header">43</h3>
                        <p className="petition_para">Petitions were debated in the House of Commons</p>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="people_petition petition_main">
                <div className="petition_list">
                <h5 className="petition_main_header">End SARS, Stop Police Brutality and Reform The Nigerian Police Force</h5>
                <span><h6>75,746</h6>signatures in the last hour</span>
                </div>
            </div>
        </div>
    )
}
export default Petition_page;