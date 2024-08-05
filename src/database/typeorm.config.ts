import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const typeOrmConnectionDataSource = new DataSource({
    name: 'default',
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: (process.env.TYPEORM_SYNCHRONIZE == "true"),
    migrationsRun: false,
    entities: [
        `${__dirname}/../**/**.entity{.ts,.js}`,
    ],
    migrations: [`${__dirname}/../database/migrations/**/*{.ts,.js}`],
    migrationsTableName: "typeorm_migrations",
});

export default typeOrmConnectionDataSource;