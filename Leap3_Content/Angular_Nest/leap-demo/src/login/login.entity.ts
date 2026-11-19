import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class LoginEntity {
  @PrimaryColumn()
  username!:string;

  @Column()
  password!: string;
}

