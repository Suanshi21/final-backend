/* eslint-disable prettier/prettier */

// Import necessary decorators and classes from TypeORM
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from '../tasks/entities/task.entity';

/**
 * User entity represents a user in the system.
 * It contains user-specific information and their associated tasks.
 */
@Entity('users')
export class User {
  // Primary key for the User entity, automatically generated
  @PrimaryGeneratedColumn()
  id: number;

  // Column for the username of the user
  @Column()
  username: string;

  // Column for the user's email address
  @Column()
  email: string;

  /**
   * One-to-many relationship between User and Task entities.
   * A user can have many tasks associated with them.
   */
  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
