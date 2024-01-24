//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Activity")
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Id: string;

@Column({nullable: true})
Description: string;

@Column({nullable: true})
Tutor: string;

@Column({nullable: true})
Costperlesson: string;


}
