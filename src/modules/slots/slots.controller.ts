import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SlotsService } from './slots.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('slots')
export class SlotsController {
  constructor(private readonly slotsService: SlotsService) {}

  @Post()
  create(@Body() createSlotDto: CreateSlotDto) {
    return this.slotsService.create(createSlotDto);
  }

  @Post('/space')
  @ApiBody({ type: Object })
  createSpace(@Body() input: any) {
    return this.slotsService.createSpace(input);
  }
  @Get()
  findAll() {
    return this.slotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slotsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlotDto: UpdateSlotDto) {
    return this.slotsService.update(id, updateSlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slotsService.remove(id);
  }
}
