const texts = [];
function myFunction() {
    // push the value to array
    texts.push(document.getElementById("myText").value);
    
    // make variable and added all array items to print in the "enteredText" paragraph
    let text = "<ul>";
    for (let i = 0; i < texts.length; i++) {
        // get list items from an array 
        text += "<li>" + texts[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("enteredText").innerHTML = text;

    // make the "myText" input empty
    document.getElementById("myText").value = '';
}