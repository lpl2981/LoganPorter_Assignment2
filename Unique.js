//01-28-18 script to detect if an array contains unique values//
function isUnique(array){
    var output = [];
    var aLength = array.length;
    var isUnique = true;
    for (var i=0; i < aLength; i++) {
        var check = array[i];
        if (output.indexOf(check) > -1) {
            isUnique = false;
        }
        output.push(check);
    }
    return isUnique;
}
console.log(isUnique([1,2,3,4,5]));