import React, { useState } from 'react'

const SortByGender = ({ sortedNames }) => {
    const [sortByBoys, setSortByBoys] = useState([])
    const [sortByGirls, setSortByGirls] = useState([])
    const [sortByAll, setSortByAll] = useState([])

    const handelBoys = () => {
        setSortByBoys(sortedNames.filter((boy) => boy.sex === "m" ? boy.name : null))
    }
    const handelGirls = () => {
        setSortByGirls(() => sortedNames.filter((girl) => girl.sex === "f" ? girl.name : null))
    }
    const handelAll = () => {
        setSortByAll(sortedNames.filter((all) => all.name));
    }
    
    return (
        <>
            <button onClick={handelBoys}> Boys Names </button>
            {sortByBoys.map((boy) => <div key={boy.id}>{boy.name}</div>)}
            <button onClick={handelGirls}> Girls Names</button>
            {sortByGirls.map((girl) => <div key={girl.id}>{girl.name}</div>)}
            <button onClick={handelAll}>Rest Names</button>
            {sortByAll.map((names) => <div key={names.id}>{names.name}</div>)}
        </>
    );
};

export default SortByGender;