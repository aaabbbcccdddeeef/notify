import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HMSToken } from './models/HMSToken.model';
import { Create_HMSTokenDto } from './dto/create_HMSToken.dto';

@Injectable()
export class HMSTokenService {
  constructor(
    @InjectModel(HMSToken)
    private HMSTokenModel: typeof HMSToken,
  ) {}

  create(createHMSTokenDto: Create_HMSTokenDto): Promise<HMSToken> {
    // @ts-ignore
    return this.HMSTokenModel.create(createHMSTokenDto);
  }

  async findAll(): Promise<HMSToken[]> {
    return this.HMSTokenModel.findAll();
  }

  findOne(_ID: string): Promise<HMSToken> {
    return this.HMSTokenModel.findOne({
      where: {
        _ID,
      },
    });
  }

  findOneByUserId(userId: string): Promise<HMSToken> {
    return this.HMSTokenModel.findOne({
      where: {
        userId,
      },
    });
  }

  async remove(_ID: string): Promise<void> {
    const HMSToken = await this.findOne(_ID);
    await HMSToken.destroy();
  }
}
