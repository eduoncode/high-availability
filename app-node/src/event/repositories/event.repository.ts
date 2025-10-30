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

  async create(event: EventEntity): Promise<EventEntity> {
    const eventInstance = this.eventRepository.create(event);
    await this.eventRepository.save(eventInstance);
    return eventInstance;
  }

  async findAll(): Promise<EventEntity[]> {
    return this.eventRepository.find();
  }

  async findById(id: string): Promise<EventEntity | null> {
    return this.eventRepository.findOneBy({ id });
  }
}
