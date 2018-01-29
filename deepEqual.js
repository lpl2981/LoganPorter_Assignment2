//01-28-18 script to compare object property values//
function deepEqual(object1, object2) {
    if (typeof (object1 === object2) && object1 != null && object2 != null)
        return true;
    else if (typeof object1 !== object2)
        return false;
    else
        for(var i = 0; i < object1.length; i++)
            if(object1.length === object2.length)
                i += object1.length;
                return true;
            else
                return false;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
