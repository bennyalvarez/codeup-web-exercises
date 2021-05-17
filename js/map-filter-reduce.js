//array iteration methods

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// es5

let emails = users.map(function(user){
    user = user.email;
    return user;
});
console.log(emails);

//es6

let es6emails = users.map(user => user.email);
console.log(es6emails);


/* Use .filter to create an array of user objects
where each user object has at least 3 languages in the languages array.*/

// let trilinguals = user.filter(function(user) {
//     return user.languages.length >= 3;
// });
// console.log(trilinguals);





// .forEach()
//
// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// // prices.forEach(function (item, index) {
// //     output = output + "<p>" + item + " is at index " + index + "</p>";
// //     $("#output").html(output);
// // });
//
// p
//
// prices.forEach( (item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total $${total}</p>`;
//     $('#output').html(output);
// });
//
// // const mileages = cars.map(car => car.mileage);
// //
// // mileages.forEach(mileage => {
// //     output += `<p>${mileage}</p>`;
// //     $('#output').html(output);
// // });
// //
// // const mileages = cars.map(car => car.mileage);
// //
// // mileages.forEach(mileage => {
// //     output += `<p>${mileage}</p>`;
// //     $('#output').html(output);
// // });
//
// //es5
// //var mileages = cars.map(function(car) {
// return car.mileage;
// });

//#4.

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

let totalOfAllUsersYearsOfExp = users.reduce((totalYearsOfExp, user) => {
    return totalYearsOfExp + user.yearsOfExperience;
},0);

console.log(totalOfAllUsersYearsOfExp);

//#5. Use .reduce to get the longest email from the list of users.


//example
// var longest = arr.reduce(
//     function (a, b) {
//         return a.length > b.length ? a : b;
//     }
// );

let emailLength = users.reduce((a, b)=>{
    return a.length > b.email.length ? a : b.email;
}, []);
console.log(emailLength);

//6.

