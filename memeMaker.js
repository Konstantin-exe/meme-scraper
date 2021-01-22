const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');
const path = require('path');
const http = require('http');

const imagesUrl = 'https://api.memegen.link/images/';

const memeImg = process.argv[2];
const memeTxtTop = process.argv[3];
const memeTxtBtm = process.argv[4];

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
