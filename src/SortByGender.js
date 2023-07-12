import React from 'react'

const SortByGender = ({ sortedNames, setFilteredNames }) => {

    const handelBoys = () => {
        setFilteredNames(sortedNames.filter((boy) => boy.sex === "m"))
    }
    const handelGirls = () => {
        setFilteredNames(sortedNames.filter((girl) => girl.sex === "f"))
    }
    const handelResetNames = () => {
        setFilteredNames(sortedNames.filter(() => [...sortedNames]));
    };
    
return (
    <div className="name-gender-buttons">
        <button className="reset-names Sort-btn" onClick={handelResetNames}>
            Reset
        </button>
        <button className="boy-names Sort-btn" onClick={handelBoys}>
            Boys
        </button>
        <button className="girl-names Sort-btn" onClick={handelGirls}>
            Girls
        </button>
    </div>
    );
};

export default SortByGender;
                