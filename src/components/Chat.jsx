import React from "react";
import "../index.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Chat = () => {
  const [page, setPage] = useState(0);
  const url = `http://3.111.128.67/assignment/chat?page=${page}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, [page]);

  const fetchMessages = () => {
    axios.get(url).then((res) => {
      setData((prevChats) => [...res.data.chats, ...prevChats]);
    });
  };

  return data.map((chats) =>
    chats.sender.self === true ? (
      <div className="self">
        <div className="context-self">{chats.message}</div>
      </div>
    ) : (
      <div className="other">
        <div className="context">{chats.message}</div>
        <div className="icon">
          <img src={chats.sender.image} alt="pic" className="pic" />
        </div>
      </div>
    )
  );
};

export default Chat;
