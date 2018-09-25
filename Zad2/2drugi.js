function cut (str, num){
var a = "";
var k = 0;

for (let i = 0; i < str.length; i++){
    a = a + str[i];
    k++;
    if (k >= num){
        break;
    }
}

console.log (a);
}

cut("hello", 2);