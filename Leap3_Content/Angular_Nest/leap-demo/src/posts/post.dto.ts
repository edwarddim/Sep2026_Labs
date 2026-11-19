import { IsNotEmpty, IsNotIn, IsNumber, IsString, MinLength } from 'class-validator';

export class PostDto {


  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content!: string;
}

//npm install @nestjs/common class-transformer class-validator