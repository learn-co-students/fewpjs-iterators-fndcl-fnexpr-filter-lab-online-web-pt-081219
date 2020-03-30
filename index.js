// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(n =>{
        return n.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, name){
    return drivers.filter(n =>{
        return n.slice(0, name.length).toLowerCase() === name.toLowerCase();
    });
}

function matchName(drivers, name){
    return drivers.filter(n =>{
        return n.name.toLowerCase() === name.toLowerCase();
    });
}