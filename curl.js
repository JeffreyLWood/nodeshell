const request = require("request");

// function getCode(url, (error, response, body) => {
//     console.error('error:', error);
//     console.log('status code:', response && response.statusCode);
//     console.log('body:', body)
// })

function getCode(url) {
  request(url, function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  });
}

module.exports = {
  getCode,
};
