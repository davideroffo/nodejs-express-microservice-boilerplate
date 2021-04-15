# nodejs-express-microservice-boilerplate

This repository generates a microservice boilerplate in NodeJS using the Express framework.

## How to run the service

- **npm start**: run the service in production mode
- **npm run dev**: run the service in development mode with nodemon active
- **npm run test**: run tests with _jest_ and _supertest_

## Test the ssample /api/v1/users route:

You can test if everything is working doing these steps:

- npm install
- npm run dev
- curl http://localhost:3000/api/v1/users

The sample response should be:

```
{
	"users": [{
		"username": "dave"
	}, {
		"username": "Mike"
	}]
}
```

## Dependencies

Main dependencies:

- express
- helmet
- winston
- express-winston

Development dependencies:

- nodemon
- jest
- supertest
