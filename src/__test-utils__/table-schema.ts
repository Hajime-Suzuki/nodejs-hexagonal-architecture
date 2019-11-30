import { DynamoDB } from 'aws-sdk'

export const getTableSchema = (tableName: string): DynamoDB.Types.CreateTableInput => ({
  AttributeDefinitions: [
    {
      AttributeName: 'PK',
      AttributeType: 'S',
    },
    {
      AttributeName: 'SK',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'PK',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'SK',
      KeyType: 'RANGE',
    },
  ],
  BillingMode: 'PAY_PER_REQUEST',
  TableName: tableName,
})
