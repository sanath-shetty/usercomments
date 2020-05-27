import React from "react";

const Singlecomment = (props) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <p className="card-title">{props.singleComment.name}</p>
        <p className="card-text">{props.singleComment.body}</p>
      </div>
    </div>
  );
};

export default Singlecomment;
