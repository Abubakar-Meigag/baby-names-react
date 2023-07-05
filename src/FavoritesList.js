import React from "react";

const FavoritesList = ({ favoriteList }) => {
  console.log(favoriteList);
  return (
    <>
      <div className="favorite--list">
        <h2>Favorite Name List</h2>
      </div>
      <div className="favorite-box-item">
        {favoriteList.map((name, index) => {
          return (
              <div
                style={{
                  backgroundColor:
                    name.sex === "f" ? "rgb(255, 156, 215)" : "rgb(168, 212, 255",
                }}
                className="favoriteList-item"
                key={index}
              >
                {name.name}
              </div>
          );
        })}
      </div>
    </>
  );
};

export default FavoritesList;
