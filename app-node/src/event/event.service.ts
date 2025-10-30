import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventRepository } from './repositories/event.repository';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}
  async create(createEventDto: CreateEventDto) {
    const event = this.eventRepository.create({
      author: createEventDto.author,
      date: new Date(),
      id: randomUUID(),
      location: createEventDto.location,
      metadata: createEventDto.metadata,
      title: createEventDto.title,
      type: createEventDto.type,
    });
    return event;
  }

  findAll() {
    return this.eventRepository.findAll();
  }

  findOne(id: string) {
    return this.eventRepository.findById(id);
  }
}
