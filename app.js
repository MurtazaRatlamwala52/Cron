const cron = require('node-cron')
const express = require('express')
const app = express()



app.get('/', (req, res) => {
    var count = 0;
    res.send('App is Running Check your console......');
    var task = cron.schedule('* * * * * *', () => {
      count++;
      console.log(count);
      if (count === 3) {
        task.stop();
      }
    });
  });

app.listen(5253, ()=>{
    console.log('Server Running on post 5253')
})