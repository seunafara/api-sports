function checkURL(url, character = "/") {
	if (url.includes(character)) {
		url = url.replace(character, "")
	}
	return url
}

const options = {
	method: "GET",
}

const SPORTS = {
	americanFootball: "v1.afl.api-sports.io/",
	basketball: "v1.basketball.api-sports.io/",
	baseball: "v1.baseball.api-sports.io/",
	football: "v3.football.api-sports.io/",
	formula1: "v1.formula-1.api-sports.io/",
	handball: "v1.handball.api-sports.io/",
	hockey: "v1.hockey.api-sports.io/",
	nba: "v2.nba.api-sports.io/",
	rugby: "v1.rugby.api-sports.io/",
	volleyball: "v1.volleyball.api-sports.io/",
}

class Sports {
	constructor(API_KEY) {
		this.API_KEY = API_KEY
		this.options = options
	}

	#request = (url, params, sport) => {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("x-apisports-key", this.API_KEY);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      const queryParams = new URLSearchParams(params)
      fetch(`https://${sport}${checkURL(url)}?${queryParams}`, requestOptions)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
  }

	americanFootball = (url, params) =>
		this.#request(url, params, SPORTS.americanFootball)
	basketball = (url, params) => this.#request(url, params, SPORTS.basketball)
	baseball = (url, params) => this.#request(url, params, SPORTS.baseball)
	football = (url, params) => this.#request(url, params, SPORTS.football)
	formula1 = (url, params) => this.#request(url, params, SPORTS.formula1)
	handball = (url, params) => this.#request(url, params, SPORTS.handball)
	hockey = (url, params) => this.#request(url, params, SPORTS.hockey)
	nba = (url, params) => this.#request(url, params, SPORTS.nba)
	rugby = (url, params) => this.#request(url, params, SPORTS.rugby)
	volleyball = (url, params) => this.#request(url, params, SPORTS.volleyball)
}

export default Sports
