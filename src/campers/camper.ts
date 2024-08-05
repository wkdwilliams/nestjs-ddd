import { AggregateRoot } from '@nestjs/cqrs';

/**
 * Domain model
 * Rules and validation go here
 */

export class Camper extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly age: number,
    private allergies: string[]
  ) {
    super();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getAllergies(): string[] {
    return this.allergies;
  }

  updateAllergies(allergies: string[]): void {
    this.allergies = allergies;
  }
}
