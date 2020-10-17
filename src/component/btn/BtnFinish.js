import React from "react";
import "./BtnFinish.css";

export default function BtnFinish({ title }) {
  return (
    <div className="container_btnfinish">
      <p className="text_btnfinish">{title}</p>
    </div>
  );
}
