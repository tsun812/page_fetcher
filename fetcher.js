const request = require("request")
const fs = require("fs")

const pageDownload = function (){
let url = process.argv[2];
let path = process.argv[3];
request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  if(response.statusCode === 200){
  fs.writeFile(path, response, 'utf8' , (err, response) => {
    if (err) {
      return console.error(err)
      
    }
  })
}
});


};
pageDownload();
module.exports = {pageDownload};