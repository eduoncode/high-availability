import { Injectable } from '@nestjs/common';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class EventRepository {
  private events: EventEntity[] = [];

  create(event: EventEntity): void {
    this.events.push(event);
  }

  findAll(): EventEntity[] {
    return this.events;
  }

  findById(id: string): EventEntity | undefined {
    return this.events.find((event) => event.id === id);
  }
}
