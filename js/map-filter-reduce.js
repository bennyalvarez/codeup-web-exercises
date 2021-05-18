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

//javier's explanation
let totalYearsOfExperience = users.reduce(function(total, user) {
    let yearsOfExperience = user.yearsOfExperience;
    return total + yearsOfExperience;
}, 0);

console.log(totalYearsOfExperience);

//es6

totalYearsOfExperience = users.reduce((total, user)=> total + user
    .yearsOfExperience, 0);

console.log(totalYearsOfExperience);

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

//alternate easier way re-calling the above map function

let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);
(longestUserEmail);

//javier's way...

let longestEmail = users.reduce(function(accumulator,user, index, userArray){
    if(index === userArray.length -1){
        accumulator.push(user.email);
        accumulator.sort(function(email1, email2){
            return email2.length - email1.length;
        });
        return accumulator[0];
    } else {
        accumulator.push(user.email);
        return accumulator;
    }
}, []);

console.log(longestEmail);

//hanna's
const longestEmails = users.reduce((longest, current) =>
    longest.email.length > current.email.length ? longest : current ).email;

//irvin's

// let emails = [];
// for (let i = 0; i < users.length; i++) {
//     emails.push(users[i].email)
// }
// var longestWord = emails.reduce(function (longest, currentWord) {
//     if (currentWord.length > longest.length)
//         return currentWord;
//     else
//         return longest;
// }, "");
// console.log(longestWord)


//6.

// let usersNames = users.reduce((accumulator, user) => {
//     accumulator += user.name;
//     return accumulator + ", ";
// },'Users names are: ');
// console.log(usersNames);

let usersNames = users.reduce((accumulator, user, index, arr) => {
    if (index === arr.length -1) {
        accumulator += user.name + '.';
    } else {
        accumulator += user.name + ', ';
    }
    return accumulator;
},'Users names are: ');
console.log(usersNames);

//javier's - look at w3 array methods

let names = user.reduce(function(accumulator, user){
    accumulator.push(user.name);
    return accumulator;
}, []);
console.log(names);

// let namesNicelyJoined = users.reduce(function(accumulator, user, index, userArray){
//     if (index === users)
// })

let usersString = users.reduce((accu, user, index) => {
    return index === 0 ? user.name : accu + ", " + user.name;
}, "");
console.log("The instructors are: " + usersString);

//bonus

let uniqueArray = users.reduce(function (nameArray, user, index, array) {
    nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
    // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
    // nameArray = [...nameArray,...user.languages];
    // console.log(nameArray);
    if (index === array.length - 1) {
        // return getUniqueValues(nameArray);
        return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
    } else {
        return nameArray;
        // return getUniqueValues(nameArray);
    }
}, []);
console.log(uniqueArray);

