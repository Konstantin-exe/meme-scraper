const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');
const path = require('path');

const imagesUrl = 'https://api.memegen.link/images/';

const memeImg = process.argv[2];
const memeTxtTop = process.argv[3];
const memeTxtBtm = process.argv[4];

if (memeImg === 'help') {
  fetch('https://api.memegen.link/templates/')
    .then((res) => res.json())
    .then((json) => {
      let jsonArray = [];
      for (let i = 0; i <= 142; i++) {
        jsonArray.push(json[i].key);
      }
      console.log(jsonArray);
    });
}
// console.log(templates);

let dir = './your_meme';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const memeUrl = `${imagesUrl}${memeImg}/${memeTxtTop}/${memeTxtBtm}`;

async function callYourMeme() {
  await request(memeUrl);
  const download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      request(uri).pipe(
        fs
          .createWriteStream(path.join(__dirname, './your_meme', filename))
          .on('close', callback),
      );
    });
  };
  download(memeUrl, 'your_meme.jpg', () => {});
}

callYourMeme();
