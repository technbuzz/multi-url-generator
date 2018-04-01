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

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res) => {
  res.render('index');
})


app.post('/', (req,res) => {
  console.log(`The req is ${req}`);
  res.render('index')
  
})

app.listen(3000, ()=> console.log('Example app listening on Port 3000!'))

