const translateInputText = document.getElementById("userTextInput")
const translateBtnEl = document.querySelector("#btn-translate")
const translateOutputDivEl = document.querySelector("#outputDiv")
const serviceURL = "https://api.funtranslations.com/translate/minion.json"
// const serviceURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructURL(text) {
    let encodedURI = encodeURI(text);
    console.log(`${serviceURL}?text=${encodedURI}`)
    return `${serviceURL}?text=${encodedURI}`
}
translateBtnEl.addEventListener("click", () => {
    let input = translateInputText.value
    if(input.trim().length === 0 || input == "") {
        alert("You have not entered the text to be translated.. Kindly enter the text to be translated")
        return
    }
    let finalURL = constructURL(input)
    fetch(finalURL)
    .then(res => res.json())
    .then(json => translateOutputDivEl.textContent = json.contents.translated)
    .catch(() => {
        alert("We are facing some issue right now.. Please try again later")
    })
})