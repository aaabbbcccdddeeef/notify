import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HMSToken } from './models/HMSToken.model';
import { HMSTokenController } from './HMSToken.controller';
import { HMSTokenService } from './HMSToken.service';

@Module({
  imports: [SequelizeModule.forFeature([HMSToken])],
  providers: [HMSTokenService],
  controllers: [HMSTokenController],
})
export class HMSTokenModule {}
