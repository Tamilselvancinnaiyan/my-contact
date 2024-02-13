
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
                type: String,
                require:[true, "Please add the contact name"],        
            },
            email: {
                type: String,
                require:[true, "Please add the email"],      
            },
            phone: {
                type: String,
                require:[true, "Please add the phone number"],        
            } 
},{
            timestamps:true,
        }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
