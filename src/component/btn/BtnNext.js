import React from "react";
import "./BtnNext.css";

export default function BtnNext({ title }) {
  return (
    <div className="container_btnnext">
      <p className="text_btnnext">{title}</p>
    </div>
  );
}
