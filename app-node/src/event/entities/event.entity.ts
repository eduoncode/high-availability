import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  date: Date;

  @Column()
  type: string;

  @Column()
  location: string;

  @Column('json')
  metadata: Record<string, any>;

  @Column()
  author: string;
}
