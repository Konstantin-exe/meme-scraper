const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');
const path = require('path');

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// let imgArr = [];

// helper function to build an array with strings of <img src=/>
function getImg(arr) {
  const elementArr = [];
  for (const element of arr) {
    if (element.match('<img[^>]+src\\s*=\\s*[\'"]([^\'"]+)[\'"][^>]*>')) {
      elementArr.push(element.split('"')[1]);
    }
  }
  elementArr.length = 10;
  return elementArr;
}

// request for img download
const download = function (uri, filename, callback) {
  request.head(uri, function () {


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
  const imgArr = getImg(htmlArr);
  console.log(imgArr);

  const dir = './memes';
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
