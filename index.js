const fetch = require('node-fetch');
const fs = require('fs');
const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));
let body = [];
async function scrapMemes() {
  const res = await fetch(url);
  body = await res.text();
  let pattern = 'img';
  let filtered = body.filter(function (str) {
    return str.includes(pattern);
    body.push(filtered);
  });

  console.log(body);
}
scrapMemes();
// scrapMemes();
// let makeArray = [];
// function makeArr() {
//   if (body.includes('img'));
//   makeArray.push();
// }

// function getImage() {
//   let imgArray = [];
//   if (body.includes('img')) {
//     imgArray.push[body];
//   }
// }
