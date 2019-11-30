import { DynamoDB } from 'aws-sdk'
import { STAGE } from '@utils/constants/constants'

const TABLE_NAME = process.env.TABLE_NAME as string
const REGION = process.env.REGION as string

type DBConfig = {
  config: DynamoDB.Types.ClientConfiguration
  tableName: string
}

const localDBConfig: DBConfig = {
  config: {
    region: REGION,
    accessKeyId: '1',
    secretAccessKey: '2',
    endpoint: 'http://localhost:8000',
  },
  tableName: 'dev-node-hexagonal',
}

const devAndProdConfig: DBConfig = {
  config: {
    region: REGION,
  },
  tableName: TABLE_NAME,
}

export const getDBConfig = (env: typeof STAGE): DBConfig => {
  if (env === 'local') {
    return localDBConfig as any
  }

  return devAndProdConfig
}

export const dbConfig = getDBConfig(STAGE)
