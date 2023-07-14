import React, { useState } from "react";
import babyNames from "./BabyNames";
import FavoritesList from "./FavoritesList";
import SearchNames from "./SearchNames";

export default function BabyColors() {
    const sortedNames = [...babyNames].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    const [filteredNames, setFilteredNames] = useState([...sortedNames]);
    const [favoriteList, setFavoriteList] = useState([]);

    const handleFavorite = (el) => {
        setFavoriteList(() => [...favoriteList, {name: el.name, sex: el.sex}]);
        removeNames(el);
    };

    const removeNames = (el) => {
        setFilteredNames(() => {
            filteredNames.splice(filteredNames.indexOf(el), 1)
            return filteredNames;
        })
    };

    return (
        <div>
            <SearchNames 
            sortedNames={sortedNames}
            setFilteredNames={setFilteredNames} />
            <FavoritesList favoriteList={favoriteList} />
            <div className="border-box">
            {filteredNames.map((el) => (
                <div
                    style={{
                        backgroundColor:
                        el.sex === "f" ? "rgb(255, 156, 215)" : "rgb(168, 212, 255",
                    }}
                    className="baby-box"
                    value={el.sex}
                    key={el.id}
                    onClick={(() => handleFavorite(el))}
                    >
                    {el.name}
                </div>
            ))}
            </div>
        </div>
    );
}
