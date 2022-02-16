import senator_dark from "../../assets/icons/senator_dark.svg";
import petition from "../../assets/icons/petition.svg";
import Feedbacks_dark from "../../assets/icons/Feedbacks_dark.svg";
import statistics_dark from "../../assets/icons/statistics_dark.svg";


const RepsFooter = () => {
    return(
        <footer className="representative_footer">
            <div className="footer_content">
                <div><img src={senator_dark} alt=""/></div>
                <h5 className="rep_footer_header">Reps</h5>
            </div> 

            <div className="footer_content">
                <div><img src={petition} alt=""/></div>
                <h5 className="rep_footer_header">Petitions</h5>
            </div>

            <div className="footer_content">
                <div><img src={Feedbacks_dark} alt=""/></div>
                <h5 className="rep_footer_header">Feedbacks</h5>
            </div>

            <div className="footer_content">
                <div><img src={statistics_dark} alt=""/></div>
                <h5 className="rep_footer_header">Reps</h5>
            </div>
        </footer>
    )
}
export default RepsFooter;