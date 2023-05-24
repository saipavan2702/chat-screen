import React from "react";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";
// import { useRef } from "react";
import axios from "axios";

const Chat = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  // const containerRef = useRef(null);

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = containerRef.current;
  //     if (
  //       container.scrollTop + container.clientHeight >=
  //       container.scrollHeight - 200
  //     ) {
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //   };

  //   const container = containerRef.current;
  //   container.addEventListener("scroll", handleScroll);
  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  window.addEventListener("scroll", () => {
    // Calculate the scroll position and height of the page
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page) => page + 1);
    }
  });

  // data.sort(function (a, b) {
  //   return a.time < b.time;
  // });

  const renderChats = () => {
    return data.map((chats) =>
      chats.sender.self === true ? (
        <div key={chats.id} className="self">
          <div className="context-self">{chats.message}</div>
          <p>{chats.time}</p>
        </div>
      ) : (
        <div key={chats.id} className="other">
          <div className="context">{chats.message}</div>
          <p>{chats.time}</p>
          <div className="icon">
            <img src={chats.sender.image} alt="" className="pic" />
          </div>
        </div>
      )
    );
  };

  return <div className="chat-body">{renderChats()}</div>;
};

export default Chat;
