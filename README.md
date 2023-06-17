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

You can then use the any of the available methods to make requests to the API. For example, if we to make a request to the football endpoint, the football method takes two parameters: the endpoint URL (as a string), and an object of query parameters:

```javascript
sports.football('endpoint', { param1: 'value1', param2: 'value2' })
  .then(data => console.log(data))
  .catch(error => console.error(error));

```

## Methods

### `football(url, params)`

Makes a GET request to the football API endpoints.
[API Docs](https://rapidapi.com/api-sports/api/api-football/)

- `url`: The endpoint URL (as a string).
- `params`: An object of query parameters.

Returns a Promise that resolves with the response data.

### `basketball(url, params)`

Makes a GET request to the basketball API endpoints.
[API Docs](https://rapidapi.com/api-sports/api/api-basketball/)

- `url`: The endpoint URL (as a string).
- `params`: An object of query parameters.

Returns a Promise that resolves with the response data.

## Contributing

Contributions are welcome! Please submit a pull request or create an issue to get started.
