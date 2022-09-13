var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area")
var output = document.querySelector(".output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    alert("error occured", error)
}

btnTranslate.addEventListener("click", function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
        })
    .catch(errorHandler)

});



