import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class EventRepository {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}
  private events: EventEntity[] = [];

  async create(event: EventEntity): Promise<EventEntity> {
    const eventInstance = this.eventRepository.create(event);
    await this.eventRepository.save(eventInstance);
    return eventInstance;
  }

  findAll(): EventEntity[] {
    return this.events;
  }

  findById(id: string): EventEntity | undefined {
    return this.events.find((event) => event.id === id);
  }
}
