import React from "react";
import { ReactComponent as IconProfileBig } from "../../asset/allSvg/iconProfileBig.svg";
import "./PictureIconProfile.css";

export default function PictureIconProfile({
  width,
  height,
  fromCardContactOwner,
}) {
  return (
    <div className="circle_icon_profile_pictureicon" style={{ width, height }}>
      {!fromCardContactOwner && <IconProfileBig />}
    </div>
  );
}
