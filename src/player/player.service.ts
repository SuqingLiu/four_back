import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async saveColors(colors: string[]) {
    return this.prisma.player.create({
      data: { colors },
    });
  }

  async getColorsByLatestPlayer() {
    const latestPlayer = await this.prisma.player.findFirst({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        colors: true,
      },
    });

    return latestPlayer;
  }
}
