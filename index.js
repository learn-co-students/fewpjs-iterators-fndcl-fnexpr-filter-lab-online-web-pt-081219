const findMatching = (driversArray, matchName) => {
    return driversArray.filter(e => {
        return e.toLowerCase() === matchName.toLowerCase();
    })
}

const fuzzyMatch = (driversArray, firstLetters) => {
    return driversArray.filter(e => {
        return true
        // return e.slice(0, firstLetters.length).toLowerCase() === firstLetters.toLowerCase();
    })
}

const matchName = (driversArray, matchName) => {
    return driversArray.filter(e => {
        return e.name.toLowerCase() === matchName.toLowerCase();
    })
}