import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyService } from './app.myservice';
import { PostController } from './posts/post.controller';
import { PostControllerDto } from './posts/post.controller.copy';
import { PostsService } from './posts/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginDto } from './login/login.dto';
import { LoginEntity } from './login/login.entity';

@Module({
    imports:[
        TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      logging:true,
      entities:[LoginEntity]
    }),
     TypeOrmModule.forFeature([LoginEntity])
    ],
    
    controllers: [AppController, PostController, PostControllerDto, LoginController],
    providers:[AppService, MyService, PostsService, LoginService]
})
export class AppModule {

}