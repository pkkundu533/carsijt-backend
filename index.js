const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
var cors = require('cors')
const fs = require('fs');


let app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 4000,
  keys: ['iamfine']
}));
// app.use(cookieParser());

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/', (req,res)=>{
  res.send('Hello world');
});

// https.createServer(options, app).listen(5000,()=>{
//   console.log("app listen port 3000");
// });
app.listen(3000,()=>{
            console.log("app listen port 3000");
        })

