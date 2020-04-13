// Code your solution here
function findMatching(drivers, string){
    let driver = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return driver
}

function fuzzyMatch(drivers, str){
    let driver = drivers.filter(driver => driver.startsWith(str))
    return driver
   
}

function matchName(drivers, string){
    let driver = drivers.filter(driver => driver.name === string)
    return driver

}