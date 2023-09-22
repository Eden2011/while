"use strict";

let a=3;
while (a<9){//tant que 'a' est inf à 9
    a++ //+1 sur 'a'
    if (a==7){//'==' indique une égalité, comparaison des valeurs
        continue//reprise de la boucle
    }
    if (a==8){
        break//arrêt de la boucle
    }
    console.log(a);
}
console.log("la boucle est cassée au bout de "+ a+" tours.");