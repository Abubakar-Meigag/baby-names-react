import React, { useState } from "react";
import babyNames from "./BabyNames";
import FavoritesList from "./FavoritesList";
import SortByGender from "./SortByGender";


export default function BabyColors( { props } ) {
  // sort names
    const sortedNames = [...babyNames].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

  // useState for search & favorites
    const [text, setText] = useState("");
    const [filteredNames, setFilteredNames] = useState([...sortedNames]);
    const [favoriteList, setFavoriteList] = useState([]);

  // filter Names
    const filterNames = () => {
        const searchInput = text.toLowerCase();
        const searchForNames = sortedNames.filter((el) =>
        el.name.toLowerCase().includes(searchInput)
        );
        setFilteredNames(searchForNames);
    };

    const handleChange = (event) => {
        setText(event.target.value);
        filterNames();
        event.preventDefault()
    };

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
            <div className="search">
                <input
                type="text"
                value={text}
                id="search"
                onChange={handleChange}
                placeholder="Search Names..."
            />
            <div className="name-gender-buttons">
                <SortByGender 
                sortedNames={sortedNames} 
                setFilteredNames={setFilteredNames}/>
            </div>

            </div>
            <></>
            <div>
                <FavoritesList favoriteList={favoriteList} />
            </div>
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
