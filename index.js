const Crawler = require('node-html-crawler');
const url = "memegen-link-examples-upleveled.netlify.app"

const crawler = new Crawler(url);

crawler.crawl();
crawler.on('data', (data) => {console.log(data.result.body)});

function getImages() {
  return new Promise((resolve, reject) => {
     // Array.from will create an array
     // map will return a new array with all the image url
    let imgArr = Array.from(document.getElementsById('images').querySelector('div')
        .querySelectorAll('img'))
      .map((item) => {
        return item.getAttribute('src')
      })
    resolve(imgArr)
  })
}
}
// getImages().then((d) => {
//  // it will work only after the promise is resolved
//   console.log('****', d);
//   //(item => {
//     // call saveImageToDisk function

//   })

// })




// const c = new Crawler({
//   callback: function(error, res, done) {
//       if (error) {
//           console.log({error})
//       } else {
//           const images = res.$('img')
//           images.each(index => {
//             urlArr.push[images]
//               console.log({
//                   src: images[index].attribs.src,
//                   alt: images[index].attribs.alt,
//               })
//           })
//       }
//   }
// })

