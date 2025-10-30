import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiBody({
    type: CreateEventDto,
    description: 'Data for creating a new event',
    examples: {
      example1: {
        summary: 'Create Event Example',
        description: 'This is an example of a create event request',
        value: {
          title: 'Buy order',
          type: 'order',
          location: 'São Paulo - Brazil',
          metadata: '',
          author: 'John Doe',
        },
      },
    },
  })
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }
}
