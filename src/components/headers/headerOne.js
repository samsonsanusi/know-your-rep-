import Logo_light from "../../assets/icons/Logo_light.svg";
import {useState} from "react";
import Hamburger from 'hamburger-react';
import Oval_colored from "../../assets/icons/Oval_colored.svg";

    
const HeaderOne = () => {
    const [isOpen, setOpen] = useState(false)
    return(
        <div>
            <header className="representative_header">
                <div className="header_dark" >
                <div className="header_logo"><img className="logo_white" src={Logo_light} alt=""/></div>
                <div className="hamburger_light">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                </div>
                <div className="search_representative">
                    <form className="representative_form">
                    <input type="text" className="representative_area_search" placeholder="Anthony Ajayi, Onike, Yaba, Lagos" />
                    </form>
                    <div className="searchBtn_representative">
                    <img src={Oval_colored} alt=""/>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default HeaderOne;