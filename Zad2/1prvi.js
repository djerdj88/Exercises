function provjera (str1, str2) {
    var a = "";
    b = str1.length;
    c = str2.length;

    if (str2.length > str1.length) {
        console.log("Duzina drugog niza ne smije biti veca od prvog!!!");
    }
    else{
        for (let i = b - c; i < b; i++){
            a = a + str1[i];
        }
        if (a === str2){
            console.log("String se zavrsava sa targetom.");
        }
        else {
            console.log("String se ne zavrsava sa targetom.");
        }
    }
}

provjera("abudsadsa","dsaf");