import React from "react";
import "../style/JokeHeader.css";

const JokeHeader = ({ onClick }) => {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">
        <span>Funny</span> Jokes
      </h1>
      <div className="sidebar__content">
        <button data-title="" className="sidebar__button" onClick={onClick}>
          Add New Jokes
        </button>
      </div>
    </div>
  );
};

export default JokeHeader;
