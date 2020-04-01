function findMatching(driversArray, driverName) {
  return driversArray.filter(
    entry => driverName.toLowerCase() === entry.toLowerCase()
  );
}

function fuzzyMatch(source, testString) {
  return source.filter(
    possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(driversArray, driverName) {
  return driversArray.filter(driversArray => driversArray.name === driverName);
}
