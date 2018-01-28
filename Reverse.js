//01-28-18 Reverse script with function to turn words backwards//

function ReverseString(string) {
    var stringLength = string.length;
    var stringReverse = "";
    for (var count = stringLength - 1; count >= 0; count--) {
        stringReverse += string[count];
    }
    return stringReverse;
}
console.log(ReverseString("reverseme"));