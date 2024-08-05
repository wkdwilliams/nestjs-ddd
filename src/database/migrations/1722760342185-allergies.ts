import { MigrationInterface, QueryRunner } from "typeorm";

export class Allergies1722760342185 implements MigrationInterface {
    name = 'Allergies1722760342185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`camper\` ADD \`allergies\` json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`camper\` DROP COLUMN \`allergies\``);
    }

}
