// Add your JavaScript here
let generatedPasssword = document.getElementById("generatedPasssword")
generatedPasssword.value = ""

let uppercaseLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercaseLettersArray = "abcdefghijklmnopqrstuvwxyz"
let symbolsArray = "!@#$%^&*()_+{}\":>?</|`~"
let numbersArray = "1234567890"


let uppercaseBox = document.getElementById("uppercase")
let lowercaseBox = document.getElementById("lowercase")
let numbersBox = document.getElementById("numbers")
let symbolsBox = document.getElementById("symbols")

let generatePasswordBtn = document.getElementById("generate")

generatePasswordBtn.onclick = () => {
    generatedPasssword.value = ""
    let length = document.getElementById("length")
    for(let i = 0; i <= length.value; i++) {
        if (uppercaseBox.checked) {
            let randomIndex = Math.floor(Math.random() * uppercaseLettersArray.length);
            generatedPasssword.value += uppercaseLettersArray[randomIndex];
        } if (lowercaseBox.checked) {
            let randomIndex = Math.floor(Math.random() * lowercaseLettersArray.length);
            generatedPasssword.value += lowercaseLettersArray[randomIndex];
        } if (numbersBox.checked) {
            let randomIndex = Math.floor(Math.random() * numbersArray.length);
            generatedPasssword.value += numbersArray[randomIndex];
        } if (symbolsBox.checked) {
            let randomIndex = Math.floor(Math.random() * symbolsArray.length);
            generatedPasssword.value += symbolsArray[randomIndex];
        }
    }
}