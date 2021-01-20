const fetch = require('node-fetch');
const url = 'https://memegen-link-examples-upleveled.netlify.app/';

fetch(url)
  .then((res) => res.text())
  .then((body) => console.log(body));
