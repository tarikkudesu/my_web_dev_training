'use strict'

/* *************************** Closure *************************** */
// A function has access to the vaiable envirement (VE) of the excecution context in which it as created
// VE attached to the function, exactly as it was at the time and place of the function was created
// 👉 A closure is the closed-over variavle envirement of the execution context in which the function was created, even after that execution context is gone;
// 👉 a Closure gives a function access to all the variables of its parent function, ever after that parent function
// has returned. The function keeps a reference to its outer scope, which preserves the scope throughout time

// const secureBooking = function () {
// 	let passengerCount = 0;

// 	return function() {
// 		passengerCount++;
// 		console.log(passengerCount);
// 	}
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

/* Example 1 */

// let f;
// const g = function () {
	// 	const a = 23;
	// 	f = function() {
		// 		console.log(a * 2);
		// 	}
		// }
		// g();
		// f();
		
/* Example 2 */

// const boardPasengers = function(n, wait) {
	// 	const perGroup = n / 3;
	
	// 	setTimeout(function() {
		// 		console.log(`We are all boarding all ${n} passengers`);
		// 		console.log(`there are 3 groups, each with ${perGroup} passengers`);
		// 	}, wait * 1000);
		
		// 	console.log(`will start boarding in ${wait} seconds`);
	// }
		
// boardPasengers(180, 3);
		
/* Example 3 */





/* *************************** one time function *************************** */

// const runOnce = function() {
// 	console.log('This will never run again');
// }
// runOnce();
// runOnce();

// (function () {
// 	console.log('This will never run again');
// })();

// (() => console.log("hi"))();

/* *************************** bind *************************** */

// const addTax = (rate, value) => rate * value + value;
// const addVAT = addTax.bind(null, 0.22);
// console.log(addTax(0.1, 300));
// console.log(addVAT(300));
// console.log(addVAT(200));
// console.log(addVAT(350));
// console.log(addVAT(460));

// const airLine1 = {
// 	name: `airline1`,
// 	code: `LT`,
// 	bookings: [],
// 	book(flightNum, passenger) {
// 		console.log(`${passenger} booked a seat on ${this.name} flight ${this.code}${flightNum}`);
// 		this.bookings.push({flight: `${this.code}${flightNum}`, name: passenger});
// 	}
// };

// const airLine2 = {
// 	name: `airline2`,
// 	code: 'TR',
// 	bookings: [],
// }

// const	book = airLine1.book;
// const book2 = book.bind(airLine2, 76, `Rick`);

// airLine1.book(234, `Rick`);

// book.call(airLine2, 235, 'Alaric');
// console.log(airLine2);
// console.log(airLine1);


// const flightData = [983, 'stewy'];

// book.apply(airLine2, flightData);
// book.call(airLine2, ...flightData);

// book2();
// book2();
// book2();

// book(253, `tarikku_desu`);

/* ********************** pass by value and by reference ********************** */
// const flight = 'LH234';
// const rick = {
// 	name: 'tarikku_desu',
// 	passport: 78672863487,
// }

// const checkIn = function(flightNum, passenger) {
// 	flightNum = 'LH999';
// 	passenger.name = `Mr. ` + passenger.name;

// 	if (passenger.passport === 78672863487)
// 		console.log("check in");
// 	else
// 		console.log("wrong passport");
// }

// checkIn(flight, rick);
// console.log(flight);
// console.log(rick);

/* ************************** default parameter value ************************** */
// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
// 	// ES5
// 	numPassengers = numPassengers || 1;
// 	price = price || 199;
// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// }

// createBooking(`LH123`, 6, 800);
// createBooking(`LH123`, undefined, 800);

