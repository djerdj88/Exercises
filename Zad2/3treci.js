function cipher (str){
    var a = "";
    for (let i = 0; i < str.length; i++){
        if ((str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 110)){
            a = a + String.fromCharCode(str.charCodeAt(i)+13);
        }
        else if ((str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 109 && str.charCodeAt(i) < 123)){
            a = a + String.fromCharCode(str.charCodeAt(i)-13);
        }
    }

    a = a + "...";


 console.log(a);
}

cipher('Hellon');