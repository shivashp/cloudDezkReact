## CloudDezkReact
### Overview

The following instructions assumes that the repo is cloned, node and git are installed.

### Dependencies
Install dependencies within the CloudDezkReact/ folder via the following command:
` npm install `

### Setting up local development environment:
1. /client/config/production.js  `stripeKey`
2. /config                       `server port`

#### Client: 
Below command will transpile all the client React files in client/ directory to the dist/ directory. All the client JS files will be bundled in the bundle.js file within dist/. Moreover, any changes in the client files will be reflected to the bundle.js (hot reloading).

` npm run devClient `   -- for developing
` npm run buildClient `  -- for production release

#### Server: 
The following command will start the server from the localhost:4201
` npm run buildServer `


### Setting up the production environment environment: 
` npm install `
` npm run buildClient `
` npm run buildServer `