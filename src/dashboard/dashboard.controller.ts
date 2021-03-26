import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  /*
  @Post()
  create(@Body() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }*/

  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }
/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardService.update(+id, updateDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardService.remove(+id);
  }
*/
  
  /*My program*/
  @Get("/total_view")
  getTotal_view(){
    return this.dashboardService.getTotalView();
  }

  @Get("/total_amount")
  getTotal_amount(){
    return this.dashboardService.getTotalAmount();
  }
  
  @Get("/total_member")
  getTotal_member(){
    return this.dashboardService.getTotalMember();
  }

  @Get("/top_vdo")
  getTop_vdo(){
    return this.dashboardService.getTopVDO();
  }

  @Get("/banner")
  getBanner(){
    return this.dashboardService.getBanner();
  }

  @Get("/top_course_viewers")
  getTop_course_viewers(){
    return this.dashboardService.getTopCourseViewers();
  }

  /*
  const mappedBanner = this.getBanner.map( () => {
    const _model = {
      
    }
  })*/
}
