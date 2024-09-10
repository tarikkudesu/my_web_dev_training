'use strict'

// const restaurant = {
// 	name: 'Classico Italiano',
// 	location: 'Via Angelo Tavanti 23, Firenxe, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
// 	starterMenu : ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	openingHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	orderDilevery: function ({starterIndex = 0, mainIndex = 0, address, time = '20:00'}) {
// 		console.log(`order received : ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}`);
// 	},
// 	orderPasta: function(mainIng, ...ing1) {
// 		console.log(`here is your delicious pasta with ${mainIng}`, ...ing1);
// 	},
// };


/* ************************************ strings ************************************ */
// const str = `kore ga subarashiii`;
// console.log(str.length);
// console.log(str.indexOf('s'));
// console.log(str.lastIndexOf('s'));
// console.log(str.slice(0, str.indexOf(' ')));
// console.log(str.slice(str.lastIndexOf(' ') + 1));
// console.log(str.slice(-11));
// console.log(str.toLocaleUpperCase());

// const Name = 'tarRIkKU_deSu';
// const NameLowered = Name.toLowerCase();
// const newName = NameLowered[0].toUpperCase() + NameLowered.slice(1);
// console.log(newName);
// const email = 'amehritarik@gmail.com';
// const wrongEmail = '  Amehritarik@gmail.com \n';
// const newEmail = wrongEmail.toLowerCase().trim();
// console.log(newEmail);

// const priceGB = '288,98%';
// const priceUS = priceGB.replace('%', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

// console.log(announcement.replaceAll('door', 'gate'));


// const plane = 'A320neo';

// console.log(plane.includes('A'));
// console.log(plane.includes('a'));
// console.log(plane.includes('320'));
// console.log(plane.startsWith('320'));
// console.log(plane.startsWith('A320'));
// console.log(plane.endsWith('A320'));
// console.log(plane.endsWith('neo'));


/* ******************************** coding challenge ******************************** */
/*
Let's continue with our football betting app! This time, we have a map with 
a log of the events that happened during the game. The values are the events 
themselves, and the keys are the minutes in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from 
minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, 
on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether 
it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

// const gameEvents = new Map([
// 	[17, '⚽️ GOAL'],
// 	[36, '🔁 Substitution'],
// 	[47, '⚽️ GOAL'],
// 	[61, '🔁 Substitution'],
// 	[64, '🔶 Yellow card'],
// 	[69, '🔴 Red card'],
// 	[70, '🔁 Substitution'],
// 	[72, '🔁 Substitution'],
// 	[76, '⚽️ GOAL'],
// 	[80, '⚽️ GOAL'],
// 	[92, '🔶 Yellow card'],
// ]);

// const events = [...new Set( gameEvents.values() )];
// gameEvents.delete(64)
// console.log(events);
// let eventNum = 0;
// let	average = 0;
// let prev = 0;
// for (const [key, value] of gameEvents) {
// 	if (key >= 0 && key <= 90) {
// 		average += key - prev;
// 		eventNum++;
// 		prev = key;
// 	}
// }
// average /= eventNum;
// console.log(`an event happened, on average, every ${average} minutes`);
// for (const [key, value] of gameEvents) {
// 	const half = key < 45 ? 'FIRST' : 'SECOND';
// 	console.log(`[${half} HALF] ${key}: ${value}`);
// }

/* ************************************** maps ************************************** */
// const rest = new Map();

// rest.set('name', 'Tarik').set('age', 22)
// .set('number', '0624651076')
// .set('e-mail', 'tarikamehri@gmail.com');

// console.log(rest.get('name'));
// console.log(rest.get('e-mail'));
// console.log(rest.get('number'));
	//iterating a map
	// const question = new Map([
	// 	['question', 'what is the best programming language'],
	// 	[1, 'C'],
	// 	[2, 'C++'],
	// 	[3, 'Java'],
	// 	[4, 'JavaScript'],
	// 	['correct', 2],
	// 	[true, 'Correct✨'],
	// 	[false, 'Try again'],
	// ]);
	// console.log(question);
	// console.log(question.get('question'));
	// for (const [key, value] of question) {
	// 	if (typeof(key) === 'number')
	// 		console.log(value);
	// }
	// const answer = 21;
	// console.log(question.get(question.get('correct') === answer));
	// console.log(question.entries());
	// console.log(question.values());
	// console.log(question.keys());
	// console.log([...question]);

/* ************************************** sets ************************************** */
// const orderSet = new Set([
// 	'Pasta',
// 	'Pizza',
// 	'Pizza',
// 	'Risotto',
// 	'Pasta',
// 	'Pizza',
// ]);

// console.log(orderSet);
// console.log(new Set('tarikku'));
// console.log(orderSet.size);
// console.log(orderSet.has('tarol'));
// orderSet.add('tarol');
// console.log(orderSet.has('tarol'));
// orderSet.delete('tarol');
// console.log(orderSet.has('tarol'));

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffU = [...new Set(staff)];
// console.log(staffU);

/* ******************************** ||= ??= OPERATORs ******************************** */
	// ||= the logical OR assiignement operator
	// ??= the logical nullish coalescing assiignement operator

// const rest1 = {
// 	name: 'tarik',
// 	numGuests: 0,
// }

// const rest2 = {
// 	name: 'tarikku',
// 	owner: 'Rick',
// }

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest2);
// console.log(rest1);

/* ******************************** ?? OPERATOR ******************************** */
	// this is called the nullish coalescing operator
	// includes only undefined and null
// restaurant.numGuests = 0;
// let guests = restaurant.numGuests || 10;
// console.log(guests);

// let	g = restaurant.numGuests ?? 10;
// console.log(restaurant.numGuests);

/* ******************************** && OPERATOR ******************************** */
// let Name = 'tarik';
// Name && console.log(Name);
// Name = '';
// Name && console.log(Name);

/* ******************************** || OPERATOR ******************************** */
	// use and return any data type and can be used for short circuiting
	// return the truty value

	// restaurant.numGuests = 32;
	// const guests = restaurant.numGuests ? restaurant.numGuests : -1;
	// console.log(guests);

/* ******************************** REST OPERATOR ******************************** */
	// Spread arr is three dots on the left of the assignment operator
// const	[first, second, ...rest] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(rest);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
// 	console.log(numbers);
// }

// add(3, 5, 6);
// add(3, 5);

/* ******************************** SPREAD OPERATOR ******************************** */
	// Spread arr is three dots on the right of the assignment operator
// const	arr = [1, 2, 3, ...[7, 8, 9]];

// const ingredients = [
// 	'me',
// 	'me again',
// 	'you need me to create pasta',
// ];

// const newRestaurant = {...restaurant, founder: 'tarikku'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'tarik';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// restaurant.orderDilevery({
// 	time: '22:33',
// 	address: 'somewhere',
// 	mainIndex: 2,
// 	starterIndex: 0,
// })

// const {
// 	name: restaurantName = [],
// 	categories: tags = [],
// 	openingHours: Hours = {},
// } = restaurant;
// console.log(restaurantName);
// console.log(tags);
// console.log(Hours);

// const {fri: {open = -1, close : hi = -1}} = restaurant.openingHours;
// console.log(open, hi);

// const arr = [3, 4, 5];
// const [a, b, c] = arr;
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, , k = -1]] = nested;
// console.log(i, j, k);

// const arr = [2, 4, 5, 6];
// const newArr = [1, 2, ...arr];
// const newMenu = [...restaurant.mainMenu, 'ME'];
// const mainMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(mainMenuCopy);

//iterables: arrays, strings, maps, sets, NOT OBJECTS
// const str = 'Tarik';
// const letters = [...str, ' ', 's'];
// console.log(...letters);
