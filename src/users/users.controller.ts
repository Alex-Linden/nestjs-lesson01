import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query
} from '@nestjs/common';

@Controller('users') // /users handles this route
export class UsersController {
  // GET /users or /users?role=value returns all users or filtered users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return [];
  }
  // GET /users/:id returns a single user
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /users creates a new user
  // body: { name: 'John Doe', email: 'john@example.com' }
  @Post()
  create(@Body() user: {}) {
    return user;
  }
  // PATCH /users/:id updates a user
  // body: { name: 'Jane Doe', email: 'jane@example.com' }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }
  // DELETE /users/:id deletes a user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }
}
