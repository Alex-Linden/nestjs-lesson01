import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') // /users handles this route
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // GET /users or /users?role=value returns all users or filtered users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }
  // GET /users/:id returns a single user
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // POST /users creates a new user
  // body: { name: 'John Doe', email: 'john@example.com' }
  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.create(CreateUserDto);
  }
  // PATCH /users/:id updates a user
  // body: { name: 'Jane Doe', email: 'jane@example.com' }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, UpdateUserDto);
  }
  // DELETE /users/:id deletes a user
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
