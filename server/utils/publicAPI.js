const axios = require("axios");

const publicAPI = (apiKey) => {
  return axios.create({
    baseURL: "https://api.topia.io/api",
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
      "Accept-Encoding": "",
    },
  });
};

module.exports = { publicAPI };
