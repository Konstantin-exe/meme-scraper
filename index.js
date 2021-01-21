const fetch = require('node-fetch');
const fs = require('fs');
const url = 'https://memegen-link-examples-upleveled.netlify.app/';
let imgArr = [];

async function scrapMemes() {
  const res = await fetch(url);
  const html = await res.text();
  let htmlArr = html.split('\n');
  imgArr = getImg(htmlArr);
  console.log(imgArr);
}
function getImg(arr) {
  let elementArr = [];
  for (let element of arr) {
    if (element.match('<img[^>]+src\\s*=\\s*[\'"]([^\'"]+)[\'"][^>]*>')) {
      elementArr.push(element);
    }
  }
  elementArr.length = 10;
  return elementArr;
}

scrapMemes();
