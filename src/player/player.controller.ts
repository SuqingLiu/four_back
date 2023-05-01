import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('colors')
  async saveColors(@Body('colors') colors: string[]) {
    return this.playerService.saveColors(colors);
  }

  @Get('latest')
  async getColorsByLatestPlayer() {
    return this.playerService.getColorsByLatestPlayer();
  }

}
