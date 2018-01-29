//01-28-18 script to compare object property values//
function deepEqual(object1, object2) {
    var counter1 = 0;
    var counter2 = 0;
    if (object1 === object2 && object1 != null && object2 != null)
        return true;
    else if (typeof object1 !== object2 || object1 == null || object2 == null)
        return false;
for(var list in object1)
    counter1 += 1;
for(var list in object2)
    counter2 += 1;
    if (!(list in object1) || (!object1[list], object2[list])){
        return false;
    }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
