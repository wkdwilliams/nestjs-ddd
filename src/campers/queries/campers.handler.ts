import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CamperDto } from '../camper.dto';
import { CamperReaderRepository } from '../db/camper-read.repository';
import { CampersQuery } from './campers.query';

@QueryHandler(CampersQuery)
export class CampersHandler implements IQueryHandler<CampersQuery> {
  constructor(private readonly camperReaderRepository: CamperReaderRepository) {}

  async execute(): Promise<CamperDto[]> {
    return this.camperReaderRepository.findAll();
  }
}
