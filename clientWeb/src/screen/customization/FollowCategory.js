import React, { useState } from "react";
import "./FollowCategory.css";
//PICTURE

//COMPONENT
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardFollowCategory from "../../component/cardFollowCategory/CardFollowCategory";
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import { goodCategories, serviceCategories } from "../../Helpers";

export default function FollowCategory({ location }) {
  const [categorySelected, setCategorySelected] = useState("");
  return (
    <div>
      {console.log(categorySelected, "catgeory")}
      <Navbar location={location} />
      <HeaderGreen title="Personnalisation" />
      <div
        style={{
          marginTop: 0,
          marginBottom: 0,
          marginRight: 139,
          marginLeft: 139,
        }}
      >
        <button onClick={() => setCategorySelected("bien")}>bien</button>
        <button onClick={() => setCategorySelected("service")}>service</button>
        {categorySelected === "bien"
          ? goodCategories.map((category, index) => {
              return (
                <CardFollowCategory
                  key={index}
                  title={category.titleCategory}
                  follow={category.followByUser}
                />
              );
            })
          : serviceCategories.map((category, index) => {
              return (
                <CardFollowCategory
                  key={index}
                  title={category.titleCategory}
                  follow={category.followByUser}
                />
              );
            })}
      </div>

      <Footer />
    </div>
  );
}
