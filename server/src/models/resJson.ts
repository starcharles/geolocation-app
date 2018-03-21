// フロントエンドへ応答するデータ型
// export interface ResJson {
//     success: boolean;
//     message: string;
//     data: any;
// }

import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
    underscored: true,
})

export class ResJson extends Model<ResJson> {
    @Column
    success: boolean;

    @Column
    message: string;

    @Column
    data: any;
}
