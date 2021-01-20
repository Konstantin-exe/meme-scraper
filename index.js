const fetch = require('node-fetch');
const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const imgArr = [];

async function getImgArr() {
  const response = await fetch(url);
  const body = await response.text();
  imgArr.push(body);
  const dom = new JSDOM(body);
  console.log(
    [...dom.window.document.querySelectorAll('img')].map(
      (img) => img.outerHTML.split('"')[1],
    ),
  );
}

getImgArr();

// async function getUserAsync(name) {
//   const response = await fetch(url);
//   const body = await response.json();

//   return body;
// }

// getUserAsync();

// async function getBody() {
//   const Data = await await fetch(url)
//     .then((res) => res.text())
//     .then(function (body) {
//       return body;
//     });
//   return await Data;
// }

// console.log(getBody());

// // const dom = new JSDOM(string);

// const dom = new JSDOM(``, {
//   url: url,
//   referrer: url,
//   contentType: 'text/html',
//   includeNodeLocations: true,
//   storageQuota: 10000000,
// });
