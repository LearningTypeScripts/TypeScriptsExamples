import { Injectable } from '@nestjs/common';
import { CreateUsrDtlDto } from './dto/create-usr-dtl.dto';
import { UpdateUsrDtlDto } from './dto/update-usr-dtl.dto';

export type User = {

  id:number;
  name:string;
  username:string;
  password:string;
}

@Injectable()
export class UsrDtlsService {

  private readonly usrInfo: User[] = [
    {
     id: 111,
     name: 'XYZ',
     username:'xyz',
     password:'pass',
    },
    {
        id: 112,
        name: 'ABC',
        username:'abc',
        password:'abcpass',
    },
 ];

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

  async findlogin(username: string): Promise<User | undefined> {
    return this.usrInfo.find(usr => usr.username === username);
 }
  
}
