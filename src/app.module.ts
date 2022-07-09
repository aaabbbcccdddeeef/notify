import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HMSToken } from './HMSToken/models/HMSToken.model'
import { HMSTokenModule } from './HMSToken/HMSToken.module'

@Module({
  imports:  [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 13306,
      username: 'root',
      password: 'Bundless.cn@',
      database: 'notify',
      autoLoadModels: true, // 没有对应数据库表则直接创建
      synchronize: true,
      models: [HMSToken],
    }),
    HMSTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
