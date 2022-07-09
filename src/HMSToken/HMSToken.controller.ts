import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Create_HMSTokenDto } from './dto/create_HMSToken.dto';
import { HMSToken } from './models/HMSToken.model';
import { HMSTokenService } from './HMSToken.service';

@Controller('hmsToken')
export class HMSTokenController {
  constructor(private readonly hmsTokenService: HMSTokenService) {}

  @Post('create')
  create(@Body() createUserDto: Create_HMSTokenDto): Promise<HMSToken> {
    return this.hmsTokenService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<HMSToken[]> {
    return this.hmsTokenService.findAll();
  }

  @Get(':userId')
  findOneByUserId(@Param('userId') userId: string): Promise<HMSToken> {
    return this.hmsTokenService.findOneByUserId(userId);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string): Promise<void> {
    return this.hmsTokenService.remove(userId);
  }
}
