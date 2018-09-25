var a = [null, undefined, 1 , 0 , "hello"];

function noviNiz (niz) {
    var b = [];
    for (let i=0; i < niz.length; i++){
        if (Boolean(niz[i]) === true){
            b.push(niz[i]);
        }
    } 
    console.log(b);
}

noviNiz(a);

