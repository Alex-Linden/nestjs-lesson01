import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'ADMIN' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'ENGINEER' },
    { id: 3, name: 'Alex Smith', email: 'alex@example.com', role: 'INTERN' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com', role: 'INTERN' },
    { id: 5, name: 'John Smith', email: 'john@example.com', role: 'INTERN' },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighestId[0].id + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });

    return this.findOne(id);
  }

  remove(id: number) {
    // removeById
    const removedUser = this.findOne(id);
    if (!removedUser) {
      throw new Error('User not found');
    }
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
