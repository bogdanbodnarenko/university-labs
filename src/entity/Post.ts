import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity
} from "typeorm";
import { Teacher } from "./Teacher";
import { Channel } from "./Channel";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  text: string;

  @Column("date")
  timestamp: number;

  @Column("int")
  channel_id: number;

  @ManyToOne(() => Teacher, teacher => teacher.posts)
  owner: Teacher;

  @ManyToOne(() => Channel, channel => channel.posts)
  channel: Channel;
}
