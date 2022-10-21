import { PartialType } from '@nestjs/mapped-types';
import { CreateUsrDtlDto } from './create-usr-dtl.dto';

export class UpdateUsrDtlDto extends PartialType(CreateUsrDtlDto) {}
