// Code your solution here
function findMatching(drivers, str) {
    let d = drivers.filter( driver => {
        if (driver.toLowerCase() === str.toLowerCase()) {
            return driver;
        }   
    })
    return d;
}

function fuzzyMatch(drivers, str) {
    let d = drivers.filter( driver => {
        if (driver[0] === str[0]) {
            return driver;
        }   
    })
    return d;
}

function matchName(drivers, str) {
    let d = drivers.filter( driver => {
        if (driver.name.toLowerCase() === str.toLowerCase()) {
            return driver;
        }   
    })
    return d;
}