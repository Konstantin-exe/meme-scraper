const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');
const path = require('path');

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// let imgArr = [];

// helper function to build an array with strings of <img src=/>
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

// request for img download
const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(
      fs
        .createWriteStream(path.join(__dirname, './memes', filename))
        .on('close', callback),
    );
  });
};
// fetching the HTML
async function scrapMemes() {
  const res = await fetch(url);
  const html = await res.text();
  const htmlArr = html.split('\n');
  let imgArr = getImg(htmlArr);
  console.log(imgArr);

  let dir = './memes';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (let i = 0; i < imgArr.length; i++) {
    download(imgArr[i], `meme ${i}.jpg`, function () {});
  }
  await download;
  console.log('download completed');
}
scrapMemes();
