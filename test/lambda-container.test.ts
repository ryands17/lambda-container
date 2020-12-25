import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as LambdaContainer from '../lib/lambda-container-stack'

test('ECR repository and Lambda are created', () => {
  const app = new cdk.App()
  const stack = new LambdaContainer.LambdaContainerStack(app, 'LambdaContainer')

  expectCDK(stack).to(
    haveResourceLike('AWS::ECR::Repository', {
      ImageScanningConfiguration: {
        scanOnPush: true,
      },
    })
  )

  expectCDK(stack).to(
    haveResourceLike('AWS::Lambda::Function', {
      Code: { ImageUri: {} },
      Role: {},
      PackageType: 'Image',
    })
  )
})
