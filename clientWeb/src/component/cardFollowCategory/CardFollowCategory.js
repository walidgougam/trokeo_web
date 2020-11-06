import React from "react";
import "./CardFollowCategory.scss";

export default function CardFollowCategory({ title, follow }) {
  return (
    <div className="container_cardfollowcategory">
      <p>{title}</p>
      {follow ? (
        <div className="wrapper_unfollow_cardfollowcategory">
          <p>unfollow</p>
        </div>
      ) : (
        <div className="wrapper_follow_cardfollowcategory">
          <p>follow</p>
        </div>
      )}
    </div>
  );
}
