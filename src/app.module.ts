import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import JsBarcode from 'jsbarcode';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    DashboardModule],
    
  controllers: [AppController],
  providers: [AppService],
  //exports:[JsBarcode]
})
export class AppModule {}
