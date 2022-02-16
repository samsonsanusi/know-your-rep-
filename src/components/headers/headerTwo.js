/* eslint-disable no-unused-vars */
import Logo from "../../assets/icons/Logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";

const HeaderTwo = () => {
    const [isOpen, setOpen] = useState(false);
    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
    return (
        <>
            <div className="clipPath">
                <svg
                    width="135"
                    height="40"
                    viewBox="0 0 135 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="70.5"
                        cy="-30.5"
                        r="45.5"
                        stroke="url(#paint0_linear_25:117)"
                        stroke-width="50"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_25:117"
                            x1="25"
                            y1="-76"
                            x2="25"
                            y2="15"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.538462" stop-color="#90DF6F" />
                            <stop offset="1" stop-color="#00973F" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
        </>
    );
};

export default HeaderTwo;
