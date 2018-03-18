// ユーザー情報の型
// export interface User {
//     id: string;
//     password?: string;
//     name: string;
//     roll: string;
//     dept: string;
// }

import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
    underscored: true,
})

export class User extends Model<User> {
    @Column
    password?: string;

    @Column
    name: string;
    // birthday: Date;

    @Column
    roll: string;

    @Column
    dept: string;

    // @HasMany(() => Hobby)
    // hobbies: Hobby[];
}
