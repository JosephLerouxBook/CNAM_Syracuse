// fonction de generation du  tableau de résultat.
function handleResArr(resArr){
    event.preventDefault();
    var i = 0;
    //Cible le tableau
    const table = document.getElementById("resTable");
    const tbody = document.getElementById("targetbodyRes");
    document.getElementById("suite").innerHTML += "{";
    
    while (resArr[i]){
        //Crée la ligne
        const row = document.createElement("tr");
        //Crée les cellules
        const cellValue = document.createElement("td");
        const cellIndex = document.createElement("td");
        //Crée le text a mettre dans les cellules
        const cellVText = document.createTextNode(resArr[i]);
        const cellIText = document.createTextNode(i + 1);
        //Rempli les cellules avec le text crée au dessus
        cellValue.appendChild(cellVText);
        cellIndex.appendChild(cellIText);
        //Ecrit les cellules dans la ligne
        row.appendChild(cellIndex);
        row.appendChild(cellValue);
        //Donne l'attribut "id="resToDelCell"" necessaire a HandleResArr_Delete() pour supprimer les cases/lignes
        cellIndex.setAttribute("id", "resToDelCell");
        cellValue.setAttribute("id", "resToDelCell");
        row.setAttribute("id", "resToDelRow");
        //Ajoute a la suite du tableau la ligne
        tbody.appendChild(row);
        //Ajoute a la suite de la ligne les cellule
        table.appendChild(tbody);

        //Complete la ligne concernant la suite apres le tableau.
        document.getElementById("suite").innerHTML +=  resArr[i] + ", ";
        i++;
    }
    //derniere ligne du tableau. (le principe est le meme que dans la boucle.)
    const row = document.createElement("tr");
    const cellValue = document.createElement("td");
    const cellIndex = document.createElement("td");
    const cellVText = document.createTextNode(resArr[i + 1]);
    const cellIText = document.createTextNode(i + 1);
    cellValue.appendChild(cellVText);
    cellIndex.appendChild(cellIText);
    row.appendChild(cellIndex);
    row.appendChild(cellValue);
    row.setAttribute("id", "resToDelRow");
    cellIndex.setAttribute("id", "resToDel");
    cellValue.setAttribute("id", "resToDel");
    tbody.appendChild(row);
    table.appendChild(tbody)
    
    //Ajout dernier elements de la ligne apres tableau
    document.getElementById("suite").innerHTML += "1}";
    //Ajout de la récompense photo de chat API
    document.getElementById("Ev'rybody Wants to Be a Cat").innerHTML = "Vous avez bien meritez un <a href=\"cat.html\">chat.</a>";
}

// fonction supprimant des elements de resultat du tableau : sert a pouvoir relancer une 
function handleResArr_Delete(){
    event.preventDefault();
    //vide la suite ecrite apres le tableau
    document.getElementById("suite").innerHTML = "";
    //Recupere les lignes et cellules
    const resToDeleteRow = document.querySelectorAll('#resToDelRow');
    const resToDeleteCell = document.querySelectorAll('#resToDelCell');
    //Check que le tableau ai bien des ligne et cellules
    if (resToDeleteRow != null){
        //Supprime chaque element recuperere
        for (const elem of resToDeleteRow){
            elem.remove();
        }
    }
    //Check que le tableau ai bien des ligne et cellules
    if (resToDeleteCell != null){
        //Supprime chaque element recuperere
        for (const elem of resToDeleteCell){
            elem.remove();
        }
    }

}
