# api-sports

An easy-to-use Node.js wrapper for the API Sports service.


## Installation

You can install api-sports using npm:

```bash
npm install api-sports
```

## Usage

First, import the Sports class from the api-sports package:

```javascript
const Sports = require('api-sports');
```

If you're using ES6 imports:

```javascript
import Sports from 'api-sports';
```

Then, create a new Sports instance with your API key:

```javascript
const sports = new Sports('your-api-key');
```

You can then use any of the available methods to make requests to the API. For example, if we to make a request to the football endpoint, the football method takes two parameters: the endpoint URL (as a string), and an object of query parameters:

```javascript
sports.football('leagues', { id: 39 }) // || /leagues
  .then(data => console.log(data))
  .catch(error => console.error(error));

// should log
{
  // ...
  response: [
    {
      league: {
        id: 39,
        // ...
      }
    }
  ]
}

```

## Methods

### `americanFootball(url, params)`

Makes a GET request to the american football API endpoints.
[API Docs](https://api-sports.io/documentation/afl/v1)

- `url`: The endpoint URL (as a string).
- `params`: An object of query parameters.

Returns a Promise that resolves with the response data.

### `basketball(url, params)`

Makes a GET request to the basketball API endpoints.
[API Docs](https://api-sports.io/documentation/basketball/v1)


### `baseball(url, params)`

Makes a GET request to the baseball API endpoints.
[API Docs](https://api-sports.io/documentation/baseball/v1)


### `football(url, params)`

Makes a GET request to the football API endpoints.
[API Docs](https://www.api-football.com/documentation-v3)


### `formula1(url, params)`

Makes a GET request to the formula 1 API endpoints.
[API Docs](https://api-sports.io/documentation/formula-1/v1)


### `handball(url, params)`

Makes a GET request to the handball API endpoints.
[API Docs](https://api-sports.io/documentation/handball/v1)


### `hockey(url, params)`

Makes a GET request to the hockey API endpoints.
[API Docs](https://api-sports.io/documentation/hockey/v1)

### `nba(url, params)`

Makes a GET request to the nba API endpoints.
[API Docs](https://api-sports.io/documentation/nba/v2)

### `rugby(url, params)`

Makes a GET request to the rugby API endpoints.
[API Docs](https://api-sports.io/documentation/rugby/v1)

### `volleyball(url, params)`

Makes a GET request to the volleyball API endpoints.
[API Docs](https://api-sports.io/documentation/volleyball/v1)


## Contributing

Contributions are welcome! Please submit a pull request or create an issue to get started.
