function biggerBtn(){
alert("Hello, world!");

document.getElementById("TextFieldID").style.fontSize = "24pt";
}

function fancyRadio(){
    alert("Time to be fancy schmancy.");
    document.getElementById("TextFieldID").style.fontWeight = "bold";
    //document.getElementById("TextFieldID").style.fontStyle = "italic";
    document.getElementById("TextFieldID").style.color = "blue";
    document.getElementById("TextFieldID").style.textDecoration = "underline";
}

function boringRadio(){
    alert("Time to be boring betty.");
    document.getElementById("TextFieldID").style.fontWeight = "normal";
    document.getElementById("TextFieldID").style.color = "black";
    document.getElementById("TextFieldID").style.textDecoration = "none";
}

function mooBtn(){
    //to uppercase
    document.getElementById("TextFieldID").value = document.getElementById("TextFieldID").value.toUpperCase();
  
    // split into sentences based on period
    let sentences = document.getElementById("TextFieldID").value.split(".");
    //loop through sentences
    for (let i = 0; i < sentences.length; i++){
        //find words
        if (sentences[i].trim() !== ""){
            //put words into variable words
            let words = sentences[i].trim().split(" ");
            //add -moo to end of words
            words[words.length - 1] += "-Moo";
            //add words back to each sentence
            sentences[i] = words.join(" ");
        }
    }
    //join sentences to the textfield2
    document.getElementById("TextFieldID").value = sentences.join(".");
}



