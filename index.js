function findMatching(arrayOfNames, nameToFind) {
  let results = arrayOfNames.filter(name => name.toLowerCase() === nameToFind.toLowerCase()) 
  return results
}

function fuzzyMatch(arrayOfNames, beginningOfName) {
  let results = arrayOfNames.filter(name => name.toLowerCase().indexOf(beginningOfName.toLowerCase()) === 0)
  return results
}

function matchName(arrayOfNames, nameToFind) {
  let results = arrayOfNames.filter(n => n.name === nameToFind)
  return results
}