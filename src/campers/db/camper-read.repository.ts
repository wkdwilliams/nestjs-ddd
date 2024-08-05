import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CamperDto } from '../camper.dto';
import { CamperEntity } from './camper.entity';

@Injectable()
export class CamperReaderRepository {
  constructor(
    @InjectRepository(CamperEntity)
    private readonly camperModel: Repository<CamperEntity>,
  ) {}

  async findAll(): Promise<CamperDto[]> {
    const campers = await this.camperModel.find();
    
    return campers;
  }
}
