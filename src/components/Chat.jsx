import React from "react";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";

const Chat = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async (page) => {
      const url = `http://3.111.128.67/assignment/chat?page=${page}`;
      try {
        const res = await axios.get(url);
        const responseData = await res.data;
        setData((prevData) => [...prevData, ...responseData.chats]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 200
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderChats = () => {
    return data.map((chats) =>
      chats.sender.self === true ? (
        <div className="self">
          <div className="context-self">{chats.message}</div>
        </div>
      ) : (
        <div className="other">
          <div className="context">{chats.message}</div>
          <div className="icon">
            <img src={chats.sender.image} alt="" className="pic" />
          </div>
        </div>
      )
    );
  };

  return (
    <div ref={containerRef} className="chat-body">
      {renderChats()}
    </div>
  );
};

export default Chat;
