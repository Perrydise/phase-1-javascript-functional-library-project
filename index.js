function myEach(collection, alert){
    if(typeof collection === 'object'){
        let isValues = Object.values(collection)
         isValues.forEach(element => alert(element)) 
    } else {
        const isLoop = collection
        for (const element of isLoop) {
           alert(element)
        }
    }
    return collection
    }

    function myMap(collection, alert){
        let newArray = []
        if(typeof collection === 'object'){
            let isValues = Object.values(collection)
           newArray = isValues.map(element => alert(element)) 
        } else {
            const isLoop = collection
           newArray = isLoop.map(element => alert(element))
            }
            return newArray
            console.log(newArray)
    }

    function myReduce(collection, alert){
        console.log(collection)
    let newValue = 0
        if(typeof collection === 'object'){
            let isValues = Object.values(collection)
           newValue = isValues.reduce(function(acc, val) {
            return acc + val * 3;
         }); 
        } else {
            const isLoop = collection
           newValue = isLoop.reduce(function(acc, val) {
            return acc + val * 3;
         });
            }
            return newValue
           
    }