import { EventRepository } from './repositories/event.repository';
import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({
  controllers: [EventController],
  providers: [EventService, EventRepository],
})
export class EventModule {}
