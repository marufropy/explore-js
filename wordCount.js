text = "Bangladesh is a beautiful country  located in  the   south east asia."

var count = 0;
for(var i = 0; i < text.length; i++){
    if(text[i] == " " && text[i - 1] != " "){
        count++;
    }
}
count++;
console.log(count);