import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IdentifiableEntitySchema } from '../../database/identifiable-entity.schema';

@Entity({
  name: "camper"
})
export class CamperEntity extends IdentifiableEntitySchema {
  @Column()
  name: string;

  @Column()
  age: number

  @Column({
    type: "json"
  })
  allergies: string[];
}
