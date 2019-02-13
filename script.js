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
  const files = Number(req.body.quantity);
  const url = req.body.batch;

  let links = '';
  for (let i = 0; i < files; i++) {
    links += `${url}/${i}\r\n`
  }

  fs.writeFile('download.txt', links, err => {
    if (err) throw err;

    console.log('file Saved');
    // app.route('/download')
    res.render('download');
  });
});


app.get('/download', (req, res) => {
  const file = `${__dirname}/download.txt`;
  if(fs.existsSync(file)){
    res.sendFile(`${__dirname}/download.txt`);
  } else {
    console.log('File doesnot exist, Kindly retry!');
    res.redirect('/')
  }
});

app.listen(3000, () => console.log('Example app listening on Port 3000!'));
