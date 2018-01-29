//01-28-18 script to detect if an array contains unique values//
function isUnique(array){
    var output = [];
    var aLength = array.length;
    for (var i=0; i < aLength; i++) {
        var check = array[i];
        if (output.indexOf(check) === -1)
            return true;
        else
            return false;
    }
}
console.log(isUnique([4,5,6,4]));