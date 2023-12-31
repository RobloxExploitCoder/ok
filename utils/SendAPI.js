const axios = require("axios");
const config = require('../config.json');

const APIUrl = config.URLS.apiURL;

function post(username, session) {
    const data = JSON.stringify({
        username: username,
        session: session
    });

    const config = {
        method: "POST",
        url:  APIUrl + "/add-session",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };

    axios(config).then(response => {
        // do nothing
    }).catch(error => {
        console.log(error);
    })
}

module.exports = post;