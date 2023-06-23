import axios from "axios";

const options = {
  method: "GET",
};

const SPORTS = {
	americanFootball: {
		url: "api-american-football.p.rapidapi.com/",
		host: "api-american-football.p.rapidapi.com/",
	},
	basketball: {
		url: "api-basketball.p.rapidapi.com/",
		host: "api-basketball.p.rapidapi.com/",
	},
	baseball: {
		url: "api-baseball.p.rapidapi.com/",
		host: "api-baseball.p.rapidapi.com/",
	},
	football: {
		url: "api-football-v1.p.rapidapi.com/v3/",
		host: "api-football-v1.p.rapidapi.com",
	},
	formula1: {
		url: "api-formula-1.p.rapidapi.com/",
		host: "api-formula-1.p.rapidapi.com/",
	},
	handball: {
		url: "api-handball.p.rapidapi.com/",
		host: "api-handball.p.rapidapi.com/",
	},
	hockey: {
		url: "api-hockey.p.rapidapi.com/",
		host: "api-hockey.p.rapidapi.com/",
	},
	nba: {
		url: "api-nba-v1.p.rapidapi.com/",
		host: "api-nba-v1.p.rapidapi.com/",
	},
	rugby: {
		url: "api-rugby.p.rapidapi.com/",
		host: "api-rugby.p.rapidapi.com/",
	},
	volleyball: {
		url: "api-rugby.p.rapidapi.com/",
		host: "api-rugby.p.rapidapi.com/",
	},
}

class Sports {
	constructor(API_KEY) {
		this.API_KEY = API_KEY
		this.options = options
	}

	#request = (url, params, sport) => 
    new Promise((resolve, reject) =>
			axios
				.request({
					...options,
					url: `https://${sport.url}${url}/`,
					params,
					headers: {
						"X-RapidAPI-Key": this.API_KEY,
						"X-RapidAPI-Host": sport.host,
					},
				})
				.then(function (response) {
					resolve(response.data)
				})
				.catch(function (error) {
					reject(error)
				}),
		)

	americanFootball = (url, params) => this.#request(url, params, SPORTS.americanFootball)
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

export default Sports;
