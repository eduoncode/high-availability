import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RequestInterceptor {
  private readonly logger = new Logger(RequestInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log('Request intercepted');
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;
    this.logger.log(
      `Method: ${method}, URL: ${url}, Body: ${JSON.stringify(body) ?? 'N/A'}, Headers: ${JSON.stringify(request.headers, null, 2)}`,
    );
    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(`Request processed in ${Date.now() - now}ms`),
        ),
      );
  }
}
