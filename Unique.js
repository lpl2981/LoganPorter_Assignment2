//01-28-18 script to detect if an array contains unique values//
function isUnique(array){
    var output = [];
    var arrayLength = array.length;
    for (var i=0; i < arrayLength; i++) {
      var check = array[i];
        if (output.indexOf(check) === -1)
            return false;
        else
            return true;
    }
}
console.log(isUnique([4,5,6,2]));