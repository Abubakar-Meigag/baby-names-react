import React, { useState} from "react";
import SortByGender from "./SortByGender";

const handleChange = (setText, text, sortedNames, setFilteredNames, event) => {
    setText(event.target.value);
    filterNames(text, sortedNames, setFilteredNames);
    event.preventDefault();
};

const filterNames = (text, sortedNames, setFilteredNames) => {
    const searchInput = text.toLowerCase();
    const searchResult = sortedNames.filter((el) =>
        el.name.toLowerCase().includes(searchInput)
    );
    setFilteredNames(searchResult);
};

const SearchNames = ( { sortedNames, setFilteredNames } ) => {
    const [text, setText] = useState("");

    return (
        <div className="search">
            <input
            type="text"
            value={text}
            id="search"
            onChange={handleChange.bind(this, setText, text, sortedNames, setFilteredNames)}
            placeholder="Search Names..."
            />
            <SortByGender
            sortedNames={sortedNames}
            setFilteredNames={setFilteredNames}
            />
        </div>
    );
};

export default SearchNames;
