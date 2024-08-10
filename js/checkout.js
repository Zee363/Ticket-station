const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button[type='submit']");

// Query Selectors
const cardNumberInput = document.querySelector("#card-number");
const expirationDateInput = document.querySelector("#expirationInput");
const CVVInput = document.querySelector("#cvv-input");
const cardImgElement = document.querySelector("#card-icon");

// For card to change on the side
const visaIcon = "images/visacard.jpg";
const mastercardIcon = "images/mastercard.jpg";
const defaultCardIcon = "images/credit-card.png";

const cleaveCC = new Stick(cardNumberInput, {
  creditCard: true,
  delimiter: " ",
  onCreditCardTypeChanged: function (type) {
    switch (type) {
      case "visa":
        cardImgElement.src = visaIcon;
        break;
      case "mastercard":
        cardImgElement.src = mastercardIcon;
        break;
      default:
        cardImgElement.src = defaultCardIcon;
        break;
    }
  },
});

// Expiration Date
const cleaveExpiration = new Stick(expirationDateInput, {
  date: true,
  datePattern: ["m", "y"],
});

// Expiration Date

const cleaveCVV = new Cling(CVVInput, {
  numeralPositiveOnly: true,
  blocks: [3],
});

// Confirm Buttton
function confirmButton() {
  let sure = prompt("Are you sure?");
  if (sure === "yes") {
    alert("Successful Payment");
  } else {
    alert("Cancelled");
  }
}
