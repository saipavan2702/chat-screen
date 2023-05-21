import React from "react";
import "../index.css";
import logo1 from "../assets/Rectangle 12.jpg";
import logo2 from "../assets/Rectangle 13.jpg";
import logo3 from "../assets/Rectangle 14.jpg";
import logo4 from "../assets/Rectangle 15.jpg";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const Details = () => {
  return (
    <div className="details">
      <div className="det-left">
        <div className="grp-icon">
          <img src={logo4} alt="logo4" className="logo4" />
          <img src={logo2} alt="logo2" className="logo2" />
          <img src={logo3} alt="logo3" className="logo3" />
          <img src={logo1} alt="logo1" className="logo1" />
        </div>
        <div className="grp-name">
          From IGI Airport, T3 <br />
          To Sector 28
        </div>
      </div>
      <div className="det-right">
        <div className="call">
          <CallRoundedIcon />
        </div>
        <div className="dots">
          <MoreVertRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Details;
