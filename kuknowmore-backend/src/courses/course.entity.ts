import { from } from "rxjs";
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity()
//WARNING! pls use class name that same with collection in mongodb
//class name link to collection in mongodb
export class Course {
    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    number: string;

    @Column()
    title: string;
}

export default Course;