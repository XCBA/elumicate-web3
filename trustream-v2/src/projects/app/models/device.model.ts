import { Table, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import BaseModel from './base';

enum deviceStatus {
    IS_ENABLED,
    IS_SUSPENDED
}

@Table({
  tableName: 'device',
  indexes: [
    { name: 'address', fields: ['address'], unique: true }
  ]
})
export class DeviceModel extends BaseModel<DeviceModel> {

  @PrimaryKey
  @Column({
    type: DataType.STRING(64)
  })
  public address!: string;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  public status!: deviceStatus;
  
}