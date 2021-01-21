const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

let imgArr = [];

function getImg(arr) {
  let elementArr = [];
  for (let element of arr) {
    if (element.match('<img[^>]+src\\s*=\\s*[\'"]([^\'"]+)[\'"][^>]*>')) {
      elementArr.push(element.split('"')[1]);
    }
  }
  elementArr.length = 10;
  return elementArr;
}

async function scrapMemes() {
  const res = await fetch(url);
  const html = await res.text();
  const htmlArr = html.split('\n');
  imgArr = getImg(htmlArr);
  console.log(imgArr);
}

scrapMemes();

// fs.mkdir('./memes');

const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download(
  'https://www.google.com/images/srpr/logo3w.png',
  'google.png',
  function () {
    console.log('done');
  },
);
