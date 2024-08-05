import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1722267675437 implements MigrationInterface {
    name = 'Init1722267675437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`camper\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`camper\``);
    }

}
