import React, { useEffect, useState } from "react";
import axios from "axios";
import Singlecomment from "./Singlecomment";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const userComment = res.data;
      console.log(userComment);

      setComments(userComment);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <p className="cmt-head">Comments</p>

      <div className="row">
        <div className="col-md-10 m-auto">
          {comments.map((comment) => (
            <Singlecomment singleComment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
