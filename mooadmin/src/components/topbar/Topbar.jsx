import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MOOADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.ftun10-1.fna.fbcdn.net/v/t31.18172-8/28071228_1585059824904737_186448548908118053_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=ZNMRhvuBjJMAX_Cq2tH&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAgtMgITogczOtE1hCsvDox-bykffPsJm9eSYK-LBfhyg&oe=649EC2A8" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}