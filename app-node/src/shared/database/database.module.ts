import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: '',
      synchronize: true,
      autoLoadEntities: true,
      retryAttempts: 5,
      retryDelay: 3000,
    }),
  ],
})
export class AppModule {}
