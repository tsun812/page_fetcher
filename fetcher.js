const request = require("request")
const fs = require("fs")

const pageDownload = function (){
let url = process.argv[2];
let path = process.argv[3];
request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:',response.statusCode); // Print the response status code if a response was received
  // Print the HTML for the Google homepage.
  const res = JSON.stringify(response);
  if(response.statusCode === 200){
  fs.writeFile(path, res, 'utf8' , (err, response) => {
    if (err) {
      return console.error(err)
      
    }
  })
}
});


};
pageDownload();
module.exports = {pageDownload};