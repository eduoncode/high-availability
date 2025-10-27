import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @HttpCode(HttpStatus.OK)
  @Get()
  async healthCheck(): Promise<{ status: string }> {
    return { status: 'ok' };
  }
}
