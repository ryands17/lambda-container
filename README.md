# Running a container image deployed to ECR with Lambda

## Prerequisites

- Node >= 12
- `yarn` (recommended) or `npm`

## Steps

1. Clone this repo.

2. Edit the `region` in [lambda-container.ts](./bin/lambda-container.ts) to where you would like to deploy.

3. Comment out the Lambda function snippet first so that the ECR repo is created first and then run `yarn cdk deploy`.

4. Run the docker commands shown in the ECR console to deploy your image in the [app](./app/Dockerfile) directory.

5. Uncomment the Lambda function and run `yarn cdk deploy` again so that the function gets the image present in ECR.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `yarn build` compile typescript to js
- `yarn watch` watch for changes and compile
- `yarn test` perform the jest unit tests
- `yarn cdk deploy` deploy this stack to your default AWS account/region
- `yarn cdk diff` compare deployed stack with current state
- `yarn cdk synth` emits the synthesized CloudFormation template
