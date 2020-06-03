let https = require("https")
let querystring = require('querystring');

const callback = (error,res) => {
  console.log(res);
}


//

var postData = querystring.stringify({
  name: event.name
});

const options = {
    "hostname": "",
    "port": 443,
    "path": "",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": postData.length
    }
  };

let body = ""

    const req = https.request(options, (res) => {

        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            if (res.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            callback(null, body);
        });
    });
    req.on('error', callback);
    req.write(postData);
    req.end();
