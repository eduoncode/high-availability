export class CreateEventDto {
  title: string;

  type: string;

  location: string;

  metadata: Record<string, any>;

  author: string;
}
