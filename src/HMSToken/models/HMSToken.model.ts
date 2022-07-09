import { Column, PrimaryKey, AutoIncrement, Model, Table } from 'sequelize-typescript';

@Table
export class HMSToken extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  _ID: number;

  @Column
  userId: string;

  @Column
  token: string;
}
