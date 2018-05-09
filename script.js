const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/generate', function(req, res) {
  let links = 'This is some dummy text';
  fs.writeFile('download.txt', links, err => {
    if (err) throw err;

    console.log('Lyrics Saved');
    res.render('download');
  });
});



app.get('/download', (req, res) => {
  res.sendFile(`${__dirname}/download.txt`);
});

app.listen(3000, () => console.log('Example app listening on Port 3000!'));
