import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], {
    message: 'Valid role is required',
  })
  @IsNotEmpty()
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}
