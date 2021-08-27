import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicModule } from './modules/clinic/clinic.module';
import { StaffModule } from './modules/staff/staff.module';
import { LeaveModule } from './modules/leave/leave.module';
import { SlotsModule } from './modules/slots/slots.module';
import { PersonModule } from './modules/person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'test',
      username: 'postgres',
      password: 'password',
      entities: [__dirname + '/db/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClinicModule,
    StaffModule,
    LeaveModule,
    SlotsModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
