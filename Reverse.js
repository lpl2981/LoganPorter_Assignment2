//01-28-18 Reverse script with function to turn words backwards//

function ReverseString(string) {
    var stringLength = string.length;
    var stringReverse = "";
    for (var count = stringLength - 1; count >= 0; count--) {
        stringReverse += string[count];
    }
    return stringReverse;
}
console.log(ReverseString("Reverse Me Method 1"));

function ReverseStringArray(string) {
    var stringLength = string.length;
    var stringArray = string.split("");
    var reverseStringArray = stringArray.reverse();
    return reverseStringArray.join("");
};
console.log(ReverseStringArray("Reverse Array Method 2"));