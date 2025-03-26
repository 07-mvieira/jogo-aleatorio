let random = Math.floor(Math.random() * 10) + 1;
let n;
let guesses = 0;

const input = document.getElementById("number-input");
const button = document.getElementById("input-button");
const res = document.getElementById("res");
const guessCounter = document.getElementById("guess-counter")

console.log(random)

function guess(){
    n = input.value;
    guesses++

    res.style.display = "block";
    guessCounter.style.display = "block";

    if ((n == random) && (guesses == 1)){
        res.innerHTML = `resposta correta!!!`;
        res.style.color = "#1ab05e";

        input.setAttribute("readonly", true);
        button.setAttribute("disabled", true);

    } else if (n == random) {
        res.innerHTML = `resposta correta!!!`;
        res.style.color = "#1ab05e";

        input.setAttribute("readonly", true);
        button.setAttribute("disabled", true);
        guessCounter.innerHTML = `tentativas: ${guesses}`;
    } else {
        input.value = "";
        guessCounter.innerHTML = `tentativas: ${guesses}`;
    }
}