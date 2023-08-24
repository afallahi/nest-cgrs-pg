import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name:'usertable'})
export class User {
    @PrimaryGeneratedColumn('increment',{name:'id'})
    id: number;
 
    @Column({name:'name'})
    name: string;
 
    @Column({name:'age'})
    age: number;
}
