var a = [8, 2, 4, 1, 45, 6, 11];

a.sort(function(a,b){
    return a-b;
});

console.log(a);

var b = function(niz, poz){
    if (poz < niz[0]){
        console.log(`Element treba da se unese na ${0} poziciji.`);
    }
    else if (poz > niz[niz.length-1]){
        console.log(`Element treba da se unese na ${niz.length}. poziciji.`);
    }
    else{
        for (let i=1; i < niz.length-1; i++){
            if (poz > niz[i] && poz < niz[i+1]){
                console.log (`Element treba da se unese na ${i+1}. poziciji.`);
            }
        }
    }
    
}

b(a,7);
