// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
};

function fuzzyMatch(drivers, startLetters) {
    return drivers.filter(driver => driver.toUpperCase().startsWith(startLetters.toUpperCase()))
}; 

function matchName(drivers, name) {
    return drivers.filter(driver =>driver.name.toLowerCase() === name.toLowerCase())
}; 