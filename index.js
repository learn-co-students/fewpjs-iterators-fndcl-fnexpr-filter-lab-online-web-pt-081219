// Code your solution here
function findMatching(drivers, string){
    let matching = drivers.filter(n => {
        if (n === string || n === string.toLowerCase())
        return n
    })
    return matching
}

function fuzzyMatch(drivers, string){
    let matched = []
    let matching = drivers.filter(n => {
        let firstTwo = n.slice(0, 2)
        if (firstTwo === string)
        matched.push(n)
    })
    return matched
    console.log(matching)
}

function matchName(drivers, string){
    let matching = drivers.filter(n => {
        if (n.name === string){
        return n }
    })
    return matching
};