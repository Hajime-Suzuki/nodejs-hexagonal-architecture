import { DataMapper } from '@aws/dynamodb-data-mapper'
import * as AWS from 'aws-sdk'
import * as XRAY from 'aws-xray-sdk'
import { dbConfig } from './config'

const { DynamoDB } = XRAY.captureAWS(AWS)

export const mapper = new DataMapper({
  client: new DynamoDB(dbConfig.config) as any,
})
