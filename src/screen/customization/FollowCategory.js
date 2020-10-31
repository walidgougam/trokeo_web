import React, { useState } from "react";
import "./FollowCategory.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardFollowCategory from "../../component/cardFollowCategory/CardFollowCategory";
import { goodCategories, serviceCategories } from "../../Helpers";
import HeaderGreen from "../../component/headerGreen/HeaderGreen";

export default function FollowCategory() {
  const [categorySelected, setCategorySelected] = useState("");
  return (
    <div>
      {console.log(categorySelected, "catgeory")}
      <Navbar />
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
                  title={category.titleCategory}
                  follow={category.followByUser}
                />
              );
            })
          : serviceCategories.map((category, index) => {
              return (
                <CardFollowCategory
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
