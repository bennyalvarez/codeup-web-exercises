"use strict";

/*
Create a function that accepts a GitHub username, and returns a
promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
*/


function getGithubUsernames() {
    return fetch('https://api.github.com/users/bennyalvarez/events')
        .then(response => response.json()).then(data => {
            console.log(data);
        })
}
getGithubUsernames();
//
// fetch('https://api.github.com/users/bennyalvarez/repos', {headers: {'Authorization': GITHUB_ACCESS_TOKEN}});