const { fetchBreedDescription } = require("./breedFetcher");
const breed = process.argv.slice(2)[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log("fetch error", error);
  } else {
    console.log(desc);
  }
});
