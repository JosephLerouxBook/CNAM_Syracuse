function syrracuse(nbr){
    var keepNbr = nbr;
    var resArr = Array();
    var i = 0;
    while(nbr != 1){
        resArr[i] = nbr;

        if(nbr%2 == 0){
            nbr = nbr / 2;
        }
        else if(nbr%2 == 1){
            nbr = (nbr*3) + 1;
        }
        i++;
        console.log(resArr);
        console.log(i);
        console.log("---------------");
    }
    i++;
    resArr[i+1] = 1;
    console.log(nbr);
    console.log(i);
    console.log("---------------");
    document.getElementById("resultat").innerHTML = is;
}
