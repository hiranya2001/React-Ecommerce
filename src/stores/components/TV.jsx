import React from "react";
import { Link } from "react-router-dom";
import { tvData } from "../data/tv";

const TV = () => {
  const firstFiveImages = tvData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>TV's</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to="/tv">
                <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TV;
