var a = [8, 4, 3, 9, 1, 2, 6];
var c = [];

var b = function (niz, raz){
    if (raz > niz.length) {
        console.log("Morate unijeti manji broj od duzine niza!!!");
    }
    else {
        var d = raz;
        for (let i = 0; i < niz.length - raz + 1; i++){
            var d = raz;
            var e = i;
            while (d > 0){
                c.push(niz[e]);
                d--;
                e++;
            }
        }
    }
    i=0;
    d = raz;
    while ((niz.length - d + 1)*d > i){
        console.log(`[${c.slice( i, raz)}]`);
        i = i + d;
        raz = raz + d;
        
    }
}

b(a,4);

