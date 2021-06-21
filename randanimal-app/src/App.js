import axios from "axios";

function randomKitten() {
  axios.defaults.headers.common["x-api-key"] =
    "61d8e53c-66c8-4e75-9cf4-ac1dc9b787e5";
  /*
  let response = axios.get("https://api.thecatapi.com/v1/images/search", {
    params: { limit: 1, size: "full" },
  });

  let image = response.data[0];
  console.log(image);
  */
  return <img src="http://placekitten.com/200/300" alt="Random kitten" />;
}

export default randomKitten;
