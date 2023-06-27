import React, { useState } from "react";
import babyNames from "./BabyNames";

export default function BabyColors() {

    // sort names
    const sortedNames = [...babyNames].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    // useState for search
    const [text, setText] = useState("");
    const [filteredNames, setFilteredNames] = useState([]);

    // filter Names 
    const filterNames = () => {
        const searchInput = text.toLowerCase();
        const searchForNames = sortedNames.filter((el) =>
            el.name.toLowerCase().includes(searchInput)
        );
        setFilteredNames(searchForNames);
    }

    const handleChange = (event) => {
        setText(event.target.value);
        filterNames();
    };

    return (
    <div >
            <div className="search">
                <div></div>
                <input
                type="text"
                value={text}
                id="search"
                placeholder="Search Names..."
                onChange={handleChange}
                />
            </div>
        <div className="border-box">
            {filteredNames.map((el) => {
                if (el.sex === "f") {
                    return (
                        <div
                            style={{ backgroundColor: "rgb(255, 156, 215)" }}
                            className="baby-box"
                            key={el.id}
                        >
                            {el.name}
                        </div>
                    );
                } else {
                    return (
                        <div
                        style={{ backgroundColor: "rgb(168, 212, 255)" }}
                        className="baby-box"
                        key={el.id}
                        >
                        {el.name}
                        </div>
                    );
                }
            })}
        </div>
    </div>
    );
}
