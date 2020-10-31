import React from "react";
import "./CardFollowCategory.css";

export default function CardFollowCategory({ title, follow }) {
  return (
    <div className="container_cardfollowcategory">
      <p className="title_category_cardfollowcategory">{title}</p>
      {follow ? (
        <div className="wrapper_unfollow_cardfollowcategory">
          <p className="text_unfollow_cardfollowcategory">unfollow</p>
        </div>
      ) : (
        <div className="wrapper_follow_cardfollowcategory">
          <p className="text_follow_cardfollowcategory">follow</p>
        </div>
      )}
    </div>
  );
}
