import { AggregateRoot } from '@nestjs/cqrs';

import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export interface DataMapper<
  TEntity extends IdentifiableEntitySchema,
  TModel extends AggregateRoot
> {
  create(entity: TModel): TEntity;
  createFromEntity(entity: TEntity): TModel;
}
