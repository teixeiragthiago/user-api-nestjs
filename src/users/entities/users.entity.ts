import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 128 })
    name: string;

    @Column({ length: 128 })
    email: string;

    @Column({ length: 128 })
    nickname: string;

    @Column()
    password: string;
    
    @CreateDateColumn('created_at')
    createdAt: Date;

    @Column({default: true})
    active: boolean;

    @BeforeInsert()
    async setPassword(password: string) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(password || this.password, salt);
    }
}