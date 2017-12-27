// npm init -y
// npm i express -s
// (npm install express --save)


//server-app/server.js

// node server
//http://localhost:3000/
// const express = require('express');
// const hbs = require('hbs');
// var app = express();

// app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   res.render('home.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to my website',
//     currentYear: new Date().getFullYear()
//   });
// });



// const express = require('express');
// const hbs = require('hbs');
// var app = express();

// app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   res.render('home.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to my website',
//     currentYear: new Date().getFullYear()
//   });
// });




//views
//views/home.hbs
//views/about.hbs


//npm install hbs -s





//http://expressjs.com


//http://localhost:3000/help.html



//public/help.html

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Help Page</title>
//   </head>
//   <body>
//     <h1>Help Page</h1>
//     <p>Some text here</p>
//   </body>
// </html>











// npm init -y
// npm i express -s
// (npm install express --save)


//server-app/server.js

// node server
//http://localhost:3000/


// const express = require('express');
// const hbs = require('hbs');
// var app = express();

// app.set('view engine', 'hbs');
// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   res.render('home.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to my website',
//     currentYear: new Date().getFullYear()
//   });
// });


// app.get('/about', (req, res) => {
//   res.render('about.hbs', {
//     pageTitle: 'About Page',
//     currentYear: new Date().getFullYear()
//   });
// });

// // /bad - send back json with errorMessage
// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to handle request'
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is up on port 3000');
// });





//home.hbs


// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Some Website</title>
//   </head>
//   <body>
//     <h1>{{pageTitle}}</h1>
//     <p>{{welcomeMessage}}</p>

//     <footer>
//       <p>Copyright {{currentYear}}</p>
//     </footer>
//   </body>
// </html>





//server.js
const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
 fs.appendFile('server.log', log + '\n', (err)=>{});
   next();
});
app.use((req, res, next) => {
  res.render('maintenance.hbs');
});



hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

//bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});




// //https://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git
// git commit -m "first commit"
// git remote add origin https://github.com/zheka-morskoi/test2.git
// git push -u origin master