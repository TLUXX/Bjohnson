
function reverseContent(str){

    var reverseContent = "";


    for (var i = str.length - 1; i >= 0; i--){

        reverseContent += str[i];
    }
    return reverseContent;
}

console.log(reverseContent(["apple" + " ","orange" +" ", "pear" +" "]));
console.log(reverseContent(["baseball" + " ","bat" +" ", "glove" +" "]));
