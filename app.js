const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/webhook', async(request, response) => {
  let token = request.body.events[0].replyToken;
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer FLeq7+SIxjQ+QYp/zFY3j59hcXUFZkza7MGQlV4NHF/IaDbMhh5fbqa56MDWqPeRfDoYY6zRghobmXHAL1TLD11SEUWmRz0s3NYKG6+Y9rzFNkTdG7cg7xKJghanBd94XFNNCouQOhPQzIqQo8l/0QdB04t89/1O/w1cDnyilFU='
  };

  const {data:honda}= await axios.get('https://botapi.kmcgasia.com/api/GetCarByBrand?brand=%E0%B8%AE%E0%B8%AD%E0%B8%99')
console.log ("conplete")
  const data = {
    replyToken: token,
    messages: [{
      type: 'text',
      text: honda[0].series
    }]
  };
  
 
  axios.post('https://api.line.me/v2/bot/message/reply', data, {
    headers: headers
  })

  response.sendStatus(200)


  


});
app.listen(port,()=>{console.log("http://localhost"+port)});