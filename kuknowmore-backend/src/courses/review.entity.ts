import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID, ObjectId } from 'mongodb';

@Entity()
//WARNING! pls use class name that same with collection in mongodb
//class name link to collection in mongodb
export class Review {
    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    comments: string;

    @Column()
    score: number;

    @Column()
    courseId: ObjectId;
}

export default Review;