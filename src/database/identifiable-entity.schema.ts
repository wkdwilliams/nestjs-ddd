import { Column, PrimaryColumn } from 'typeorm';

export abstract class IdentifiableEntitySchema {
  @PrimaryColumn()
  id: string;
}
