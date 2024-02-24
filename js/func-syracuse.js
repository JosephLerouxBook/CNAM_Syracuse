//variable global, pas la meilleure solution mais ca marche.
var wasitdonebefore = false;

function syracuse(){
    //annule le reload de la page du boutton submit
    event.preventDefault();
    var keepNbr = document.getElementById("nbr").value;
    //stock les valeurs generer par l'algorithme
    var resArr = Array();
    var i = 0;
    
    // Verifie l'entrée de l'utilisateur.                  
    if (valueChecker(keepNbr)!=true){
        return(console.log("syracuse() stopped."));
    }
    //check, sinon possibilité de réappuyer sur le boutton en boucle et de regenerer le tableau en boucle.
    while(keepNbr != 1){
        resArr[i] = keepNbr;

        if(keepNbr%2 == 0){
            keepNbr = keepNbr / 2;
        }
        else if(keepNbr%2 == 1){
            keepNbr = (keepNbr*3) + 1;
        }
        i++;
    }
    i++;
    resArr[i] = keepNbr;
    resArr[i+1] = 1;
    //Envoie les nombres de la suite générer au générateur de tableau
    handleResArr_Delete();
    handleResArr(resArr);
    //change la variable global pour affirmer que la suite a deja été generer.
    wasitdonebefore = true;
     
}

