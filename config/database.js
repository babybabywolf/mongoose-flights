const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

const Flight = require('../models/flgiht'); // Import your Flight model

// const sampleFlights = [
//     new Flight({
//         airline: 'American',
//         airport: 'LAX',
//         flightNo: 100,
//         depart: new Date(2024, 0, 21) // Year, Month (0-indexed), Day
//     }),
//     new Flight({
//         airline: 'United',
//         // airport defaults to 'DEN'
//         flightNo: 200,
//         depart: new Date(2024, 5, 15)
//     }),
//     // Add more samples as needed
// ];

// sampleFlights.forEach(flight => {
//   flight.save()
//       .then(doc => console.log('Flight saved:', doc))
//       .catch(err => console.error(err));
// });

