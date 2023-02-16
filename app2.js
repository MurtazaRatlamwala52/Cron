var cron = require('node-cron');
count = 0
var task = cron.schedule('* * * * * *', () => {
    
     count++;
      console.log(count);
      
});
if (count === 3) {
    task.stop();
  }