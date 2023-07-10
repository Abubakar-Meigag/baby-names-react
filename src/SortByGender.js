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
    <>
        <button className="reset-names Sort-btn" onClick={handelResetNames}>
            Reset
        </button>
        <button className="boy-names Sort-btn" onClick={handelBoys}>
            Boys
        </button>
        <button className="girl-names Sort-btn" onClick={handelGirls}>
            Girls
        </button>
    </>
    );
};

export default SortByGender;

    
    /* <button
        className="reset-names"
        onClick={() => setFilteredNames(sortedNames)}
    >
        Reset
    </button>
    <button
        className="boy-names"
        onClick={() => setFilteredNames(sortedNames.filter((el) el.sex === "m"))}
    >
        Boys
    </button>
    <button
        className="girl-names"
        onClick={() => setFilteredNames(sortedNames.filter((el) el.sex === "f"))}
    >
        Girls
    </button> */
                