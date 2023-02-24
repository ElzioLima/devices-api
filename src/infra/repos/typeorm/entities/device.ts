import { Entity, ObjectIdColumn, PrimaryColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'devices' })
export class ORMDevice {
  @ObjectIdColumn()
  _id!: number

  @Column()
  name!: string

  @Column()
  temperature?: string

  @Column()
  humidity?: string

  @Column()
  luminosity?: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt?: Date
}
