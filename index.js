function findMatching(drivers, name) {
  let match = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  return match
}

function fuzzyMatch(drivers, str) {
  let match = drivers.filter(driver => driver.startsWith(str))
  return match
}

function matchName(drivers, name) {
  let result = drivers.filter(driver => driver.name === name)
  return result 
}
