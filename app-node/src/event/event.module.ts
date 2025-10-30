import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventRepository } from './repositories/event.repository';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5000,
    }),
    TypeOrmModule.forFeature([EventEntity]),
  ],
  controllers: [EventController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    EventService,
    EventRepository,
  ],
})
export class EventModule {}
