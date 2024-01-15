// validation.js

// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    const isLengthValid = gamertag.length >= 8;
    return isLengthValid && Math.random() >= 0.5;
};

exports.isValid = isValid;