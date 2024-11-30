// // example of blocking and async code
// // import a module by using 'require'
// const { readFile, readFileSync } = require('fs');

// // Blocking!
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt)

// // async example
// // Non-blocking
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// // this comes out first
// console.log('Do this ASAP');

// // Promise based, also non-blocking
// const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }


const express = require('express');
const app = express();

// // old fashion way
// // 'fs' is file system module
// const readFile = require('fs').readFile;
// app.get('/', async (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if(err) {
//             response.status(500).send('Sorry, out of order');
//         }
//         response.send(html);
//     })
// });

// best practice
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

        response.send( await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));

