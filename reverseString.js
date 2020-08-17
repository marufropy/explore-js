function reverseString(str){
    var result = "";
    for(var i = 0; i < str.length; i++){
        result = str[i] + result;
    }
    return result;
}

var text = "Bangladeshi Boy";
var reverse = reverseString(text);
console.log(reverse);