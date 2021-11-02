function findMatching(drivers, string) {
    // returns all drivers that match the passed in name
    // should be case insensitve
    // console.log('im hereeeee', drivers, string)
    return drivers.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) !== -1
        // console.log(string)
    })
}

// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, string) {
    // returns a driver if beginning provided letters match
    // does not return drivers if only middle or ending letters match
    // console.log('im hereeeee', drivers, string)
    return drivers.filter(function(el) {
        let splitName = el.split("", 2);
        let newString = splitName.join('');
        // console.log(newString)
        // console.log(string)
        return newString === string ? newString.indexOf(string) !== 1 : undefined
    })
}
// Write matchName - This function takes an array of drivers and a string as arguments. 
// In this function, each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument
function matchName(drivers, string) {
    // accesses the associative array aka object to check against it's name property 
    // if string provided matches, return all matching instances
    console.log('im hereeeee', drivers, string)
    return drivers.filter(function(el) {
        console.log(el)
        return el.name === string ? el.name.indexOf(string) !== 1 : undefined
    })
}