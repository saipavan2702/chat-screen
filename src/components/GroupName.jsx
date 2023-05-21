import React from "react";
import "../index.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

const GroupName = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="arrow">
          <ArrowBackRoundedIcon />
        </div>
        <div className="trip">Trip 1</div>
      </div>
      <div className="nav-right">
        <div className="edit">
          <EditNoteRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default GroupName;
