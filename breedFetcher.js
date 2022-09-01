const request = require("request");

const breed = process.argv.slice(2)[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    if (error) {
      console.log("fail download resource", error);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    console.log(breed.description);
  }
);
