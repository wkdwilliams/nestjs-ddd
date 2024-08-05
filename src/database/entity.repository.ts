import { NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

import { DataMapper } from './entity-schema.factory';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export abstract class EntityRepository<
  TEntity extends IdentifiableEntitySchema,
  TModel extends AggregateRoot
> {
  constructor(
    protected readonly typeOrmRepo: Repository<TEntity>,
    protected readonly entitySchemaFactory: DataMapper<
      TEntity,
      TModel
    >,
  ) {}

  protected async findOne(
    entityFilterQuery?: FindOneOptions<TEntity>,
  ): Promise<TModel> {
    const entityDocument = await this.typeOrmRepo.findOne(
      entityFilterQuery,
    );

    if (!entityDocument) {
      throw new NotFoundException('Entity was not found.');
    }

    return this.entitySchemaFactory.createFromEntity(entityDocument);
  }

  protected async find(
    entityFilterQuery?: FindManyOptions<TEntity>,
  ): Promise<TModel[]> {
    return (
      await this.typeOrmRepo.find(entityFilterQuery)
    ).map(entityDocument =>
      this.entitySchemaFactory.createFromEntity(entityDocument),
    );
  }

  async create(entity: TModel): Promise<void> {
    await this.typeOrmRepo.save(this.entitySchemaFactory.create(entity));
  }

  protected async findOneAndReplace(
    entityFilterQuery: FindOneOptions<TEntity>,
    entity: TModel,
  ): Promise<void> {
    const updatedEntityDocument = await this.typeOrmRepo.findOne(entityFilterQuery)

    if (!updatedEntityDocument) {
      throw new NotFoundException('Unable to find the entity to replace.');
    }

    await this.typeOrmRepo.save(this.entitySchemaFactory.create(entity))
  }
}
