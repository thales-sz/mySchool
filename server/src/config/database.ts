import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  host: 'database-1.c2oslmzt9yza.sa-east-1.rds.amazonaws.com',
  port: 3306,
  logging: console.log,
  dialect: 'mysql',
  dialectOptions: {
        ssl:'Amazon RDS'
    },
}

export = config;