//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Card")
export class CardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Cardid: string;

@Column({nullable: true})
Cardname: string;

@Column({nullable: true})
Serial: string;

@Column({nullable: true})
Price: string;

@Column({nullable: true})
Id: string;


}
