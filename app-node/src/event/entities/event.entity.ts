export class EventEntity {
  id: string;

  title: string;

  date: Date;

  type: string;

  location: string;

  metadata: Record<string, any>;

  author: string;
}
