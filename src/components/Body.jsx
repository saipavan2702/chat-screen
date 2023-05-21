import React from "react";
import GroupName from "./GroupName";
import Details from "./Details";
import Chat from "./Chat";
import "../index.css";

const Body = () => {
  return (
    <div>
      <GroupName />
      <Details />
      <Chat />
    </div>
  );
};

export default Body;
