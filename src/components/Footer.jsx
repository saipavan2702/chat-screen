import React from "react";
import "../index.css";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Footer = () => {
  return (
    <footer className="reply">
      <input className="send" type="text" placeholder="Send your Love..." />
      <div className="paper-clip">
        <AttachFileRoundedIcon
          style={{
            transform: "rotate(45deg)",
            backgroundColor: "#ffffff",
            background: "none",
          }}
        />
      </div>
      <div className="send-arrow">
        <SendRoundedIcon
          style={{ backgroundColor: "#ffffff", border: "none" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
