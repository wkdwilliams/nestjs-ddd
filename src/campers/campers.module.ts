import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Camper } from './camper';
import { CamperFactory } from './camper.factory';
import { CampersController } from './campers.controller';
import { CamperCommandHandlers } from './commands';
import { CamperReaderRepository } from './db/camper-read.repository';
import { CamperEntityRepository } from './db/camper-entity.repository';
import { CamperDataMapper } from './db/camper.datamapper';
import { CamperEntity } from './db/camper.entity';
import { CamperEventHandlers } from './events';
import { CamperQueryHandlers } from './queries';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([CamperEntity]),
  ],
  controllers: [CampersController],
  providers: [
    CamperEntityRepository,
    CamperReaderRepository,
    CamperDataMapper,
    CamperFactory,
    ...CamperCommandHandlers,
    ...CamperEventHandlers,
    ...CamperQueryHandlers,
  ],
})
export class CampersModule {}
