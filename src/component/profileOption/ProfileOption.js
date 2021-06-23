import React from "react";
import "./ProfileOption.scss";
import { allOptionsProfile } from "../../Helpers";
import ThumbnailProfile from "../thumbnailProfile/ThumbnailProfile";

function ProfileOption() {
  return (
    <>
      <div
        className='container_profileoption'
      >
        {allOptionsProfile.map((option, index) => {
          return (
            <div className='wrapper_card_profileoption'>
              <div>{option.icon}</div>
              <p style={{ margin: "0px" }}>{option.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProfileOption;
