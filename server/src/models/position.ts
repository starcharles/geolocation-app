import {Table, Column, Model, HasMany, BelongsTo} from 'sequelize-typescript';
import {User} from "./user";

@Table({
    timestamps: true,
    paranoid: true,
    underscored: true,
})

export class Position extends Model<Position> {
    @Column
    latitude: number;

    @Column
    longitude: number;

    @Column
    timestamp: number;

    @BelongsTo(() => User)
    user: User;
}
