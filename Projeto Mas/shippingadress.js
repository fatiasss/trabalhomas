document.getElementById("shippingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Input elements
    const nameOnCard = document.getElementById("nameOnCard");
    const cardNumber = document.getElementById("cardNumber");
    const expiration = document.getElementById("expiration");
    const cvc = document.getElementById("cvc");
    const streetAddress = document.getElementById("streetAddress");
    const apartmentNumber = document.getElementById("apartmentNumber");
    const city = document.getElementById("city");
    const state = document.getElementById("state");

    // Validation patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const cardNumberPattern = /^\d{16}$/;
    const expirationPattern = /^(0[1-9]|1[0-2])\/\d{4}$/; // MM/YYYY
    const cvcPattern = /^\d{3}$/;

    // Reset all error states
    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("error");
    });

    let isValid = true;

    // Validate street address: at least 3 words
    if (!isValidAddress(streetAddress.value)) {
        setError(streetAddress);
        isValid = false;
    }

    // Validate apartment number
    if (!apartmentNumber.value.trim()) {
        setError(apartmentNumber);
        isValid = false;
    }

    // Validate city
    if (!city.value.trim()) {
        setError(city);
        isValid = false;
    }

    // Validate state
    if (!state.value.trim()) {
        setError(state);
        isValid = false;
    }

    // Validate name on card
    if (!namePattern.test(nameOnCard.value)) {
        setError(nameOnCard);
        isValid = false;
    }

    // Validate card number
    if (!cardNumberPattern.test(cardNumber.value)) {
        setError(cardNumber);
        isValid = false;
    }

    // Validate expiration date
    if (!expirationPattern.test(expiration.value) || !isFutureDate(expiration.value)) {
        setError(expiration);
        isValid = false;
    }

    // Validate CVC
    if (!cvcPattern.test(cvc.value)) {
        setError(cvc);
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    } else {
        alert("Please fix the highlighted errors and submit again.");
    }
});

// Function to add the error class
function setError(input) {
    input.classList.add("error");
}

// Validate that the address has at least 3 words
function isValidAddress(address) {
    const words = address.trim().split(/\s+/);
    return words.length >= 3;
}

// Check if the expiration date is in the future
function isFutureDate(expiration) {
    const [month, year] = expiration.split("/").map(Number);
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1);
    return inputDate > currentDate;
}
