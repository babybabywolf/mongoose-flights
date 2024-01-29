const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Function to add one year to the current date
function addOneYear() {
    const createdDate = new Date();
    return new Date(createdDate.getFullYear() + 1, createdDate.getMonth(), createdDate.getDate());
}

// Flight schema definition
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "SouthWest", "United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: addOneYear // Set default as a reference to the function
    }
});

// Export the Flight model
module.exports = mongoose.model("Flight", flightSchema);
