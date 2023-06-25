import React from "react";
import babyNames from "./BabyNames";

export default function BabyColors() {
    return (
    <div className="border-box">
    {babyNames.map((el) => {
        if (el.sex === "f") {
                return (
                    <div
                        style={{ backgroundColor: "rgb(255, 174, 174)" }}
                        className="baby-box"
                        key={el.name}
                    >
                        {el.name}
                    </div>
                );
            } else {
                return (
                    <div
                    style={{ backgroundColor: "rgb(168, 212, 255)" }}
                    className="baby-box"
                    key={el.name}
                    >
                    {el.name}
                    </div>
                );
            }
        })}
    </div>
    );
}
