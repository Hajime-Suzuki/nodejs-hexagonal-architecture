import { DynamoDB } from 'aws-sdk'
import { dbConfig } from '../utils/database/config'
import { getTableSchema } from './table-schema'
import { logger } from '../utils/logger/logger'

const dynamo = new DynamoDB(dbConfig.config)
const documentClient = new DynamoDB.DocumentClient(dbConfig.config)
const tableName = dbConfig.tableName

const _putRequest = (data: any[]) => {
  const itemsList = data.map(item => ({
    PutRequest: {
      Item: item,
    },
  }))
  return itemsList
}
const _isTableExist = async () => {
  try {
    await dynamo.describeTable({ TableName: tableName }).promise()
    return true
  } catch (error) {
    logger.error('DEBUG: ', error.name)
  }
  return false
}

export const seed = async (data: any[]) => {
  await documentClient
    .batchWrite({
      RequestItems: {
        [tableName]: _putRequest(data),
      },
    })
    .promise()
}

export const truncate = async () => {
  try {
    if (await _isTableExist()) {
      await dynamo.deleteTable({ TableName: tableName }).promise()
    }
    await dynamo.createTable(getTableSchema(tableName)).promise()
  } catch (error) {
    logger.error(`DEBUG: ${error}`)
    throw error
  }
}

export const testUtils = {
  seed,
  truncate,
}
