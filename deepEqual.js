//01-28-18 script to compare object property values//
function deepEqual(object1, object2) {
    if (typeof (object1 === object2) && object1 != null && object2 != null)
        return true;
    else if (typeof object1 !== object2)
        return false;
for(var counter1 in object1)
    counter1 += 1;
for(var counter2 in object2)
    counter2 += 2;

}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
