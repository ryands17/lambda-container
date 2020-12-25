import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as ecr from '@aws-cdk/aws-ecr'

export class LambdaContainerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // An ECR repo to store the image
    let nodeApp = new ecr.Repository(this, 'node-app', {
      imageScanOnPush: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    // Create the lambda function to handle this image
    new lambda.Function(this, 'basicFn', {
      code: lambda.Code.fromEcrImage(nodeApp, { tag: 'latest' }),
      handler: lambda.Handler.FROM_IMAGE,
      runtime: lambda.Runtime.FROM_IMAGE,
    })
  }
}
