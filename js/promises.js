"use strict";

/*
Create a function that accepts a GitHub username, and returns a
promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
*/

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users/bennyalvarez/events')
//         .then(response => response.json()).then(data => {
//             console.log(data);
//         })
// }
// getGithubUsernames();
//
// fetch('https://api.github.com/users/bennyalvarez/repos', {headers: {'Authorization': GITHUB_ACCESS_TOKEN}});

// function getGithubUsernames(userName) {
//     return fetch(https://api.github.com/users/${userName}/events, {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})
// .then(response => response.json().then(data => {
//         console.log(data);
//         var latestPush = data[0].created_at
//         let date = new Date(latestPush);
//
//         console.log(date.toString());
//     }))
// }
// getGithubUsernames("Austin-Whitley")

//instructor David's version

const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization':
    'GITHUB_ACCESS_TOKEN'}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let lastPush;
            for(let event of data) {
                if(event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
        });
}

userLastCommit("bennyalvarez");


// function wait(number){
//     new Promise((resolve, reject) => {
//         setTimeout(resolve, number);
//     }).then(() => {
//         console.log("Wrapped setTimeout after 2000ms");
//     }).catch(() => console.log('Rejected'))
// }
//
// wait(3000);

//instructor david's version

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( `You'll see this after ${ms/1000} seconds`);
        }, ms);
    })
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));
wait(5000).then(() => console.log("You'll see this after 5 seconds"));

