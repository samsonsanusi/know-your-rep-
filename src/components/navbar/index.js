import senator_dark from "../../assets/icons/senator_dark.svg";
import Group_dark from "../../assets/icons/Group_dark.svg";
import Feedbacks_dark from "../../assets/icons/Feedbacks_dark.svg";
import statistics_dark from "../../assets/icons/statistics_dark.svg";
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div className="icons_link">
                    <div className="icon_group">
                    <div><img src={senator_dark}/></div>
                    <Link className="icon_text" to="/reps">Reps</Link>
              
                    </div>

                    <div className="icon_group">
                    <div><img src={Group_dark}/></div>
                    <h5 className="icon_text">Petitions</h5>
                    </div>

                    <div className="icon_group">
                    <div><img src={Feedbacks_dark}/></div>
                    <h5 className="icon_text">Feedbacks</h5>
                    </div>

                    <div className="icon_group">
                    <div><img src={statistics_dark}/></div>
                    <h5 className="icon_text">Statistics</h5>
                    </div>
                </div>
    );
}

export default Navbar;