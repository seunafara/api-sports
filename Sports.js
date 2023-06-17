import axios from "axios";

const options = {
  method: "GET",
};

const URLS = {
  football: "v3.football.api-sports.io",
  basketball: "v1.basketball.api-sports.io",
};

class Sports {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  #request = (url, params, host) =>
    new Promise((resolve, reject) =>
      axios
        .request({
          ...options,
          url: `https://${host}/${url}`,
          params,
          headers: {
            "X-RapidAPI-Key": this.API_KEY,
            "X-RapidAPI-Host": host,
          },
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
    );

  football = (url, params) => this.#request(url, params, URLS.football);
  basketball = (url, params) => this.#request(url, params, URLS.basketball);
}

export default Sports;
