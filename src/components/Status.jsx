import React from "react";
import "../index.css";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import BatteryFullRoundedIcon from "@mui/icons-material/BatteryFullRounded";

const Status = () => {
  return (
    <div className="status">
      <div className="left">
        <div className="time">9:45</div>
      </div>
      <div className="right">
        <SignalCellularAltRoundedIcon className="cellular" />
        <WifiRoundedIcon className="wifi" />
        <BatteryFullRoundedIcon
          className="battery"
          sx={{ transform: "rotate(90deg)" }}
        />
      </div>
    </div>
  );
};

export default Status;
