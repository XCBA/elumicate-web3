import { Table, Column, DataType, PrimaryKey, ForeignKey, AutoIncrement } from 'sequelize-typescript';
import BaseModel from './base';
import { DeviceModel } from './device.model';

@Table({
  tableName: 'device_data'
})
export class DeviceDataModel extends BaseModel<DeviceDataModel> {
  @PrimaryKey
  @Column({
    type: DataType.STRING(64)
  })
  public id!: string;

  @ForeignKey(() => DeviceModel)
  @Column({
    allowNull: false,
    type: DataType.STRING(64)
  })
  public address!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER()
  })
  public heartRate!: number;

  @Column({
    allowNull: false
  })
  public timestamp!: number;
}