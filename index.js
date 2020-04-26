const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/webhook', (request, response) => {
  let token = request.body.events[0].replyToken;
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer FLeq7+SIxjQ+QYp/zFY3j59hcXUFZkza7MGQlV4NHF/IaDbMhh5fbqa56MDWqPeRfDoYY6zRghobmXHAL1TLD11SEUWmRz0s3NYKG6+Y9rzFNkTdG7cg7xKJghanBd94XFNNCouQOhPQzIqQo8l/0QdB04t89/1O/w1cDnyilFU='
  };
  let data = {
    replyToken: token,
    messages: [{
      type: 'text',
      text: 'Hello World'
    }]
  };
  axios.post('https://api.line.me/v2/bot/message/reply', data, {
    headers: headers
  }).then((res) => {
    console.log(res)
  }).catch((error) => {
    console.log(error)
  });
  response.sendStatus(200)
});
app.listen(port);