const fetch = require('node-fetch');
const fs = require('fs');
const url = 'https://memegen-link-examples-upleveled.netlify.app/';

async function scrapMemes() {
  const res = await fetch(url);
  const html = await res.text();
  //const searchMatch = '<img[^>]+src\\s*=\\s*[\'"]([^\'"]+)[\'"][^>]*>';
  let imgArr = html.split('\n');
  imgArr = [getImg(imgArr)];
  console.log(imgArr);
}

scrapMemes();
// imgArr.forEach(function (element) {
//   if (element.match("img") {
//     arr.push(element)
//   })
// })

function getImg(arr) {
  for (let element of arr) {
    if (element.match('<img[^>]+src\\s*=\\s*[\'"]([^\'"]+)[\'"][^>]*>')) {
      return element;
    }
  }
}
