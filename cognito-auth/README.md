# Serverless Lambda (HTTPAPI) example with a custom Lambda authorizer for AWS Cognito User Pools

# Get Started
- install `serverless`
  - `yarn global add serverless` or `npm i -g serverless`
- create `.env` from the `.env.dist` file and update variables
- run `yarn` or `yarn install` to install dependencies
- update the `serverless.yml` with your service, org etc

# Running locally
Run `serverless offline --ignoreJWTSignature`

# Deploying APIs
Run `serverless deploy`
