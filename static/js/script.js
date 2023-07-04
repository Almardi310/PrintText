function myFunction() {
    // to add new line to the "enteredText" paragraph
    document.getElementById('enteredText').innerHTML += "<br>";
    // get value from "myText" input and print to "enteredText" paragraph
    document.getElementById('enteredText').innerHTML += document.getElementById("myText").value;
    // make the "myText" input empty
    document.getElementById("myText").value = '';
}