const fs = require('fs');
const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


// fs.writeFile('/tmp/test', 'Hey There', (err) => {
//  if(err){
//    return console.log(error);
//  } 

//  console.log('The file is saved');
 
// })

// app.use(express.static(`${__dirname}/public`))
app.set('views', path.join(__dirname, 'views'))
app.set('view engint', 'pug');



app.post('/', (req,res) => {
  console.log(`The req is ${req}`);
  res.send()
  
})

app.listen(3000, ()=> console.log('Example app listening on Port 3000!'))

