//Lance les fonction de verification de l'input de l'utilisateur.
function valueChecker(value){
    var isItNaN = valueIsNaN(value);
    var IsItEmpty = valueIsEmpty(value);

    if (isItNaN != true){
        return(isItNaN);
    }
    else if (IsItEmpty != true){
        return(IsItEmpty);
    }
    else {return(true)};
}

//Verifie si la valeur envoyer en parametre est un nombre 
function valueIsNaN(value){
    errMsg = "Error: isNaN is true";
    if (isNaN(value) == true){
        alert("Veuillez rentrer un nombre !");
        console.log(errMsg);
        return(errMsg);
    }else{return(true)}
}

//Verifie si la valeur envoyer en parametre est vide
function valueIsEmpty(value){
    errMsg = "Error: No value in user input";
    if (value == '' || value == null){
        alert("Veuillez ne pas laissez vide le nombre de départ !");
        console.log(errMsg);
        return(errMsg);
    }else {return(true)}
}