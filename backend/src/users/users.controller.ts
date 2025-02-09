import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Request } from 'express';  // Add this import

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('info')
  @UseGuards(JwtAuthGuard)
  async getUserInfo(@Req() req:any) {
    if (!req.user) {
      return null;
    }
    return await this.usersService.getUserInfo(req.user);
  }
}
