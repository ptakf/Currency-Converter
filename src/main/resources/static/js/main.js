var currencySelectionLeft = document.getElementById("currency-selection-left");
var currencySelectionRight = document.getElementById("currency-selection-right");
var currencyInputLeft = document.getElementById("currency-input-left");
var currencyInputRight = document.getElementById("currency-input-right");

currencySelectionLeft.addEventListener("change", selectCurrency);
currencySelectionRight.addEventListener("change", selectCurrency);
currencyInputLeft.addEventListener("input", debounce(convertCurrency, 300));
currencyInputRight.addEventListener("input", debounce(convertCurrency, 300));

updateConverterTitle();

// Convert the value of one currency entered to the other
function convertCurrency() {
    // TODO: Add an actual exchange rate from the API here:
    let exchangeRate = 4.5;

    currencyInputRight.value = currencyInputLeft.valueAsNumber * exchangeRate;

    document.getElementById("exchange-rate").innerHTML = `1 ${currencySelectionLeft.value.toUpperCase()} ⇄ ${exchangeRate} ${currencySelectionRight.value.toUpperCase()}`;
}

// Update the header of the converter section
function updateConverterTitle() {
    document.getElementById("converter-title").innerHTML = currencySelectionLeft.value.toUpperCase()
        + " to " + currencySelectionRight.value.toUpperCase() + " Converter";
}

function selectCurrency() {
    updateConverterTitle();
    convertCurrency();
}




// var exchangeRate = /*[[${exchangeRate}]]*/ "";
// document.getElementById("rate").innerHTML = "1 GBP = " + (exchangeRate).toFixed(2) + " PLN";
// let currencyGBP = document.getElementById('gbp');
// let currencyPLN = document.getElementById('pln');

// currencyGBP.addEventListener('input', calculatePLN);
// currencyPLN.addEventListener('input', calculateGBP);

// function calculatePLN() {
//     currencyPLN.value = (currencyGBP.value * exchangeRate).toFixed(2);
// }

// function calculateGBP() {
//     currencyGBP.value = (currencyPLN.value / exchangeRate).toFixed(2);
// }

// Switch between dark and light modes
function switchDarkMode() {
    document.body.classList.toggle("dark-mode");

    let buttonStyle = document.getElementById("dark-mode-switch");
    buttonStyle.innerHTML == "🌝" ? buttonStyle.innerHTML = "🌞" : buttonStyle.innerHTML = "🌝";
}

// Wait before executing a function passed as an argument
function debounce(callback, delay) {
    let timer;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => callback(), delay);
    }
}