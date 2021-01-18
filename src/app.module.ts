import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MLAB_URL } from 'src/enviroments/index'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MLAB_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
