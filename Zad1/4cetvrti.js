var b = [], j = 0, a, ind = 0;

while (b.length < 10){
    ind = 0;
    a = Math.floor(Math.random()*11);

for (let i = 0; i < b.length; i++){
    if (a == b[i]){
        ind = 1;
        continue;
    }
}

    if (ind == 0 && a!=0) {
        b[j] = a;
        j++;
    }
}

var prvaGrupa = b.slice(0,2);
var drugaGrupa = b.slice(2,4);
var trecaGrupa = b.slice(4,6);
var cetvrtaGrupa = b.slice(6,8);
var petaGrupa = b.slice(8,10);

console.log(`Prva Grupa: (${prvaGrupa})`)
console.log(`Druga Grupa: (${drugaGrupa})`);
console.log(`Treca Grupa: (${trecaGrupa})`);
console.log(`Cetvrta Grupa: (${cetvrtaGrupa})`);
console.log(`Peta Grupa: (${petaGrupa})`);

console.log(b);



