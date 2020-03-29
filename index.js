// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter( possibleMatch => 
        possibleMatch.toLowerCase() === string.toLowerCase()

        )
}
// This function takes an array of drivers and a string as 
// arguments, and returns the matching list of drivers. The function should be 
// case insensitive.


function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 
        )
}
// This function takes an array of drivers and a string as 
// arguments for querying the array, and returns all drivers whose names begin 
// with the provided letters.


function matchName(drivers, string) {
    return drivers.filter( drivers => drivers.name === string)
}
//  This function takes an array of drivers and a string
//  as arguments for querying the array, and returns all drivers whose names 
//  begin with the provided letters.

