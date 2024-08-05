import { IsArray, IsString } from 'class-validator';

export class UpdateCamperAllergiesRequest {
  @IsArray()
  allergies: string[];
}
