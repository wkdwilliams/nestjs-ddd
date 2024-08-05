import { Injectable } from '@nestjs/common';
import { DataMapper } from '../../database/entity-schema.factory';

import { Camper } from '../camper';
import { CamperEntity } from './camper.entity';

@Injectable()
export class CamperDataMapper
  implements DataMapper<CamperEntity, Camper> {
    
  create(camper: Camper): CamperEntity {
    return {
      id: camper.getId(),
      name: camper.getName(),
      age: camper.getAge(),
      allergies: camper.getAllergies(),
    };
  }

  createFromEntity(camperEntity: CamperEntity): Camper {
    return new Camper(
      camperEntity.id,
      camperEntity.name,
      camperEntity.age,
      camperEntity.allergies
    );
  }
}
