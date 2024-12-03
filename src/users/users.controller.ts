import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('users') // /users handles this route
export class UsersController {
  /*
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */
  // GET /users returns all users
  @Get()
  findAll() {
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
}
