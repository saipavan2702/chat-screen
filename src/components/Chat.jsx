import React from "react";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Chat = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const fetchMessages = async (page) => {
    const url = `http://3.111.128.67/assignment/chat?page=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData((prevChats) => [...data.chats, ...prevChats]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMoreChats = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 200
      ) {
        loadMoreChats();
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const renderChats = () => {
    return data.map((chats) =>
      chats.sender.self === true ? (
        <div className="self" ref={containerRef}>
          <div className="context-self">{chats.message}</div>
        </div>
      ) : (
        <div className="other" ref={containerRef}>
          <div className="context">{chats.message}</div>
          <div className="icon">
            <img src={chats.sender.image} alt="" className="pic" />
          </div>
        </div>
      )
    );
  };

  return <div ref={containerRef}>{renderChats()}</div>;
};

export default Chat;
