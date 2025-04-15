const validator = require("validator");

const validateSignupData = (req) =>{
    const {name, email, password} = req.body;
    if(!name){
        throw new Error("Enter your name")
    }
    else if (!validator.isEmail(email)) throw new Error("Enter your email");
    else if (!validator.isStrongPassword(password)) throw new Error("Enter a strong password")
}

module.exports = validateSignupData