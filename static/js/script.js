var arrayOfTexts = [];
var myInput = document.getElementById("myInput");
var myTable = document.getElementById("myTable");


function printText() {
    addTextToEndOfArray();
    createTableTitle(); //just one time
    createNewRow(); //in top of table
    initializeNewRow();
    makeInputEmpty();
}



function addTextToEndOfArray() {
    arrayOfTexts.push(myInput.value);
}



function createTableTitle(){
    if(arrayOfTexts.length === 1 && myTable.rows.length == 0){//check is this first time and not created previously
        titleRow = myTable.insertRow(0);
        var cell1 = titleRow.insertCell(0);
        var cell2 = titleRow.insertCell(1);
        cell1.innerHTML = "The Text";
        cell2.innerHTML = "Delete";
    }
}



function createNewRow() {
    textID = "text" + (arrayOfTexts.length - 1) ;
    buttonID = "button" + (arrayOfTexts.length - 1) ;
    newRow = myTable.insertRow(1);
}



function initializeNewRow(){
    newRow.id = arrayOfTexts.length - 1;
    textCell = newRow.insertCell(0);
    buttonCell = newRow.insertCell(1);
    textCell.id = textID;
    buttonCell.id = buttonID ;
    textCell.innerHTML = arrayOfTexts[arrayOfTexts.length - 1];
    buttonCell.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" style="fill: red;" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>';
    document.getElementById(textID).classList.add("editText");
    document.getElementById(textID).setAttribute("ondblclick","editText(this);");
    document.getElementById(buttonID).classList.add("deleteRow");
    document.getElementById(buttonID).setAttribute("onclick","deleteRow(this);");
}



function makeInputEmpty() {
    myInput.value = '';
}



myInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myButton").click();
    }
});



function editText(thisItem){
    var val=thisItem.innerHTML;
    var input=document.createElement("input");
    input.value=val;
    input.onblur=function(){//when leave
        var val=this.value;
        this.parentNode.innerHTML=val;
    }
    thisItem.innerHTML="";
    thisItem.appendChild(input);
}



function deleteRow(thisItem){
    var row = thisItem.parentNode;
    row.parentNode.removeChild(row);
    arrayOfTexts.splice(thisItem.id , 1);
}