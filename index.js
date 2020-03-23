// Code your solution here

function findMatching(drivers, str) {
    return drivers.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(name => name.startsWith(str));
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str);
}