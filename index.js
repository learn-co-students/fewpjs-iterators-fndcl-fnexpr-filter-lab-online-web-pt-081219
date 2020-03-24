
function findMatching(drivers, name){
  return drivers.filter(d =>
    d.toUpperCase() === name.toUpperCase()
  )
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(d =>
    d[0] === name[0]
  )
}

function matchName(drivers, name) {
  return drivers.filter(d =>
  d.name === name
  )
}

// function findMatching(source, sought) {
//   return source.filter( possibleMatch =>
//     possibleMatch.toLowerCase() === sought.toLowerCase()
//   )
// }