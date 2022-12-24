// import axios from "axios";

// const url ="https://api.github.com/users/mapbox";

// export default function getCoinList(url) {
//  axios.get(url)
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }

// getCoinList(url)

import axios from "axios";

export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "Content-type": "application/json"
  }
});



