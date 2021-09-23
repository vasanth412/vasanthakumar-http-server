// problem 4:
// GET /status/{status_code} - Should return a response with a status code as specified in the request.

//Problem 5:
//GET /delay/{delay_in_seconds} - Should return a success response but after the specified delay in
// the request. For example: If the request sent is GET /delay/3, then the server should wait
// for 3 seconds and only then send a response with 200 status code.

const express = require('express');
const app = express();
const {
  getHTML,
  getJSON,
  getUUID,
  getStatus,
  getDelayTime,
} = require('./http');

app.get('/html', getHTML);

app.get('/json', getJSON);

app.get('/uuid', getUUID);

app.get('/status/:statusCode', getStatus);

app.get('/delay/:delayTime', getDelayTime);

app.listen(5000, () => console.log('Server started'));
