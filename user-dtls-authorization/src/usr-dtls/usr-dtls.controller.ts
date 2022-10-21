import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata } from '@nestjs/common';
import { UsrDtlsService } from './usr-dtls.service';
import { CreateUsrDtlDto } from './dto/create-usr-dtl.dto';
import { UpdateUsrDtlDto } from './dto/update-usr-dtl.dto';
import { Role } from './entities/role.enum';
import { Roles } from './roles.decorator';

@Controller('usr-dtls')
export class UsrDtlsController {
  constructor(private readonly usrDtlsService: UsrDtlsService) {}

  @Post()
  @SetMetadata('roles', [Role.ADMIN])
   create(@Body() createUsrDtlDto: CreateUsrDtlDto) {
    return this.usrDtlsService.create(createUsrDtlDto);
  }

  @Get()
  @SetMetadata('roles', [Role.GUEST])
  findAll() {
    return this.usrDtlsService.findAll();
  }

  @Get(':id')
  @SetMetadata('roles', [Role.GUEST])
  findOne(@Param('id') id: string) {
    return this.usrDtlsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsrDtlDto: UpdateUsrDtlDto) {
    return this.usrDtlsService.update(+id, updateUsrDtlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usrDtlsService.remove(+id);
  }
}
