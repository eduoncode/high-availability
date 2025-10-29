import { Controller, Get, HttpCode, HttpStatus, Logger } from '@nestjs/common';

@Controller('health')
export class HealthController {
  private readonly logger = new Logger(HealthController.name);
  @HttpCode(HttpStatus.OK)
  @Get()
  async healthCheck(): Promise<{ status: string }> {
    this.logger.log('Health check requested');
    return { status: 'ok' };
  }
}
