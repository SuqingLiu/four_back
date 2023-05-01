import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [ConfigModule.forRoot(), PlayerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
