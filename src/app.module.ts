import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '../ormconfig';
import { CampersModule } from './campers/campers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CampersModule,
    DatabaseModule,
    TypeOrmModule.forRoot(ormConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
