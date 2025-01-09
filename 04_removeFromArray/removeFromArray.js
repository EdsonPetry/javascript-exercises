const removeFromArray = function() {
    // INIT args array SET to Arrays.from(arguments)
    const args = Array.from(arguments);
    // INIT input array SET to args[0]
    const input = args[0];
    // INIT toRemove array SET to the remaining arguments in args
    const toRemove = args.splice(1);
    // INIT filtered SET to empty array
    let filtered = []
    // FOR EACH loop to push elements that are NOT in toRemove
    input.forEach(element => {
        if (!(toRemove.includes(element))){
            filtered.push(element);
        }
    });

    return filtered;
    
};

// Do not edit below this line
module.exports = removeFromArray;
