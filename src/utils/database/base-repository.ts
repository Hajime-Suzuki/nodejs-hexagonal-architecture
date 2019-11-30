import {
  QueryIterator,
  DataMapper,
  StringToAnyObjectMap,
  GetOptions,
} from '@aws/dynamodb-data-mapper'
import { logger } from '@utils/logger/logger'

export abstract class BaseRepository<TDBModel, TOutPut> {
  constructor(protected mapper: DataMapper, protected Model: new () => TDBModel) {}

  protected _createItem = (primaryKey: Record<string, string>, data: Partial<TDBModel>) => {
    return Object.assign(new this.Model(), primaryKey, data)
  }

  protected _createQuery = ({ where }: { where: Partial<TDBModel> }) => {
    return Object.assign(new this.Model(), where)
  }

  protected _getArrayFromIterable = async (
    iterator: QueryIterator<TDBModel>,
  ): Promise<TDBModel[] | null> => {
    const output: TDBModel[] = []
    for await (const survey of iterator) {
      output.push(survey)
    }
    if (!output.length) return null
    return output
  }

  protected _safeGet = async <T extends StringToAnyObjectMap>(item: T, options?: GetOptions) => {
    try {
      const res = await this.mapper.get(item, options)
      return res
    } catch (error) {
      if (error.name === 'ItemNotFoundException') {
        logger.info('BaseRepository: not found')
        return null
      }
      throw error
    }
  }

  protected abstract _toDbPrimaryKey: (
    primaryKey: Record<string, string | undefined>,
  ) => { PK: string; SK: string }
  protected abstract _fromDbPrimaryKey: (
    dbPrimaryKey: Record<string, string>,
  ) => { PK: string; SK: string }
  protected abstract _deserialize: (data: TDBModel | null) => TOutPut | null
}
