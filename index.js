// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driverName => driverName.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
