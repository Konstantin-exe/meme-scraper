const fetch = require('node-fetch');
const fs = require('fs');
const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// let imgArr = [];
async function scrapMemes() {
  const res = await fetch(url);
  const html = await res.text();
  const imgArr = html.split('\n').filter('<img');
  console.log(imgArr);
}

scrapMemes();
