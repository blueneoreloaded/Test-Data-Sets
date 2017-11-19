/*
  Example code to call the Akana gateway to query for the accounts of a specific user
*/
// Required libraries to build our post
var http = require('http');
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

// specific data
var lpid = "913996201744144603";


var mydata = {
    "LegalParticipantIdentifier": lpid
};


function PostCode(codestring) {
  // Build the post string from an object
  var post_data = JSON.stringify(mydata);

  // An object of options to indicate where to post to
  var post_options = {
      host: 'api119525live.gateway.akana.com', 
      port: '80',
      path: '/user/accounts',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };
  console.log(`
Calling \"${post_options.host}\" to run \"${post_options.path}\"\n
Request date is:\n${post_data}
`);


  // Set up the request
  var post_req = http.request(post_options, function(res) {
       console.log(`The status code is ${res.statusCode}\n`);
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log(`Response is:\n${chunk}\n`);
//          console.log('Response: ' + chunk);
          var parsedJson = JSON.parse(chunk,null);
      }
      );
      res.on('error',function (e) {
          console.log('Error Response: ' + chunk);
      }
      );
  });

  // post the data
  post_req.write(post_data);

  post_req.end();
}

PostCode(JSON.stringify(mydata));

