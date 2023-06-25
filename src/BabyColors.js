import React from "react";
import babyNames from "./BabyNames";

export default function BabyColors() {
  return (
    <div className="border-box">
        {babyNames.map((el) => {
            return (
                <div className="baby-box" key={el.id}>
                    {el.name}
                </div>
            );
        })}
    </div>
  );
}
