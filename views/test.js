// 20190328035903
// http://api.themoviedb.org/3/movie/24428/videos?api_key=4d3d897644294d2ef0d6db5feff11716

var obj1 = {
  "id": 24428,
  "results": [
    {
      "id": "5794fd54c3a36829ab00036a",
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "key": "bGt-saFvkNk",
      "name": "Marvel's The Avengers Super Bowl XLVI Commercial (Extended)",
      "site": "YouTube",
      "size": 1080,
      "type": "Clip"
    },
    {
      "id": "5794fd8bc3a3687605005cc9",
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "key": "eOrNdBpGMv8",
      "name": "Marvel's The Avengers- Trailer (OFFICIAL)",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer"
    },
    {
      "id": "5c370782c3a3685ee927c291",
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "key": "hIR8Ar-Z4hw",
      "name": "Marvel's The Avengers Trailer 2 (OFFICIAL)",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer"
    }
  ]
}

console.log(obj1.results[0]["key"])
