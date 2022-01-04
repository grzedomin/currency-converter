let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.20;
let USD = 4.08;
let GBP = 5.42;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
        break;

        case "USD":
            result = amount / USD;
        break;

        case "GBP":
            result = amount / GBP;
        break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`
})
