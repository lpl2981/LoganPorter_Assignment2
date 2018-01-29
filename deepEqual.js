//01-28-18 script to compare object property values//
function deepEqual(object1, object2) {
    var list1 = {};
    var list2 = {};
    if (typeof (object1 === object2) && object1 != null && object2 != null)
        return true;
    else if (typeof object1 !== object2)
        return false;
for(list1 in object1)
    counter1 += 1;
for(list2 in object2)
    counter2 += 1;
    if (counter1 !== counter2){
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
