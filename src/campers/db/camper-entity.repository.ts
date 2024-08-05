import { Injectable } from '@nestjs/common';

import { BaseEntityRepository } from '../../database/base-entity.repository';
import { Camper } from '../camper';
import { CamperEntity } from './camper.entity';
import { CamperDataMapper } from './camper.datamapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CamperEntityRepository extends BaseEntityRepository<
  CamperEntity,
  Camper
> {
  constructor(
    @InjectRepository(CamperEntity)
    camperModel: Repository<CamperEntity>,
    EntitySchemaFactory: CamperDataMapper,
  ) {
    super(camperModel, EntitySchemaFactory);
  }
}
