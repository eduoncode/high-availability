import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [HealthModule, EventModule],
})
export class AppModule {}
