import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import {Position} from './position';

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

    @Column
    roll: string;

    @HasMany(() => Position)
    positions: Position[];
}
