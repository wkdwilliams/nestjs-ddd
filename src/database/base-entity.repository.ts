import { AggregateRoot } from '@nestjs/cqrs';
import { FindOneOptions, FindOptions, ObjectId } from 'typeorm';
import { EntityRepository } from './entity.repository';

import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export abstract class BaseEntityRepository<
  TEntity extends IdentifiableEntitySchema,
  TModel extends AggregateRoot
> extends EntityRepository<TEntity, TModel> {
  
  async findOneById(id: string): Promise<TModel> {
    return this.findOne({
      where: {
        id: id
      }
    } as FindOneOptions);
  }

  async findAll(): Promise<TModel[]> {
    return this.find({});
  }

  async findOneAndReplaceById(id: string, entity: TModel): Promise<void> {
    await this.findOneAndReplace(
      {
        where: {
          id: id
        }
      } as FindOneOptions,
      entity,
    );
  }
}
