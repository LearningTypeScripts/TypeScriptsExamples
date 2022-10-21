import { Injectable } from '@nestjs/common';
import { CreateUsrDtlDto } from './dto/create-usr-dtl.dto';
import { UpdateUsrDtlDto } from './dto/update-usr-dtl.dto';

@Injectable()
export class UsrDtlsService {
  create(createUsrDtlDto: CreateUsrDtlDto) {
    return 'This action adds a new usrDtl';
  }

  findAll() {
    return `This action returns all usrDtls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usrDtl`;
  }

  update(id: number, updateUsrDtlDto: UpdateUsrDtlDto) {
    return `This action updates a #${id} usrDtl`;
  }

  remove(id: number) {
    return `This action removes a #${id} usrDtl`;
  }
}
