const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button[type='submit']");
const iconInputsContainer = document.querySelectorAll(
  "div.icon-group-container"
);

// Query Selectors for IDs
const cardNumberInput = document.querySelector("#card-number");
const expirationDateInput = document.querySelector("#expiration");
const CVVInput = document.querySelector("#cvv");
const cardImgElement = document.querySelector("#card-icon");

// Line 14-35 is for when you fill in the card number it shows what type of a card it is e.g visa card
const visaIcon = "images/visa.svg";
const mastercardIcon = "images/mastercard.svg";
const defaultCardIcon = "images/credit-card.jpg";

// In line 20 We created a new Object Cleave that if the credit card is true then switch image credit card to Any another card based on the number.
const cleaveCC = new Cleave(cardNumberInput, {
  creditCard: true,
  delimiter: " ",
  blocks: [4, 4, 4, 2],
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
// line 37-41 Exxpiration Date, using same object Cleave and dataPatten to include "/"
const cleaveExpiration = new Cleave(expirationDateInput, {
  date: true,
  datePattern: ["m", "y"],
});

//onCreditCardTypeChanged End
// line 43-47 CVV we created a new object cling and only allows  3 numbers
const cleaveCVV = new Cling(CVVInput, {
  numeralPositiveOnly: true,
  blocks: [3],
});

// Buttons
// Send Message
function sendMesssageButton() {
  alert("Message sent.We will get back to you 😊");
}

// Confirm Buttton
function confirmButton(input) {
  let sure = prompt("Are you sure?");
  if (sure === "yes") {
    alert("Successful Payment🥳🤩");
  } else {
    alert("Cancelled😞");
  }
}

// Buttons End
