// fonction de generation du  tableau de résultat.
function handleResArr(resArr){
    event.preventDefault();
    var i = 0;
    const table = document.getElementById("resTable");
    const tbody = document.getElementById("targetbodyRes");
    document.getElementById("suite").innerHTML += "{";
    
    while (resArr[i]){
        const row = document.createElement("tr");
        /* DEBUG
        console.log("EH");
        console.log(i);
        */
        const cellValue = document.createElement("td");
        const cellIndex = document.createElement("td");
        const cellVText = document.createTextNode(resArr[i]);
        const cellIText = document.createTextNode(i + 1);
        cellValue.appendChild(cellVText);
        cellIndex.appendChild(cellIText);
        row.appendChild(cellIndex);
        row.appendChild(cellValue);
        tbody.appendChild(row);
        table.appendChild(tbody)

        document.getElementById("suite").innerHTML +=  resArr[i] + ", ";
        i++;
    }
    //derniere ligne du tableau.
    const row = document.createElement("tr");
    const cellValue = document.createElement("td");
    const cellIndex = document.createElement("td");
    const cellVText = document.createTextNode(resArr[i + 1]);
    const cellIText = document.createTextNode(i + 1);
    cellValue.appendChild(cellVText);
    cellIndex.appendChild(cellIText);
    row.appendChild(cellIndex);
    row.appendChild(cellValue);
    tbody.appendChild(row);
    table.appendChild(tbody)

    document.getElementById("suite").innerHTML += "1}";
    document.getElementById("Ev'rybody Wants to Be a Cat").innerHTML = "<a href=\"cat.html\">Vous avez bien meritez un chat.</a>";
   console.log(resArr);
}