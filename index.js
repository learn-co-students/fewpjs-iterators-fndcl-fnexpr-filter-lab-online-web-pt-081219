function findMatching(drivers, name) {
    return drivers.filter(n => 
        n.toLowerCase() === name.toLowerCase()
    )
};

function fuzzyMatch(drivers, query) {
    let i = query.length
    let match = drivers.filter(n => {
        return n.slice(0,i) === query;
    })
    return match
};

function matchName(drivers, name) {
    return drivers.filter(n => n.name === name)
}