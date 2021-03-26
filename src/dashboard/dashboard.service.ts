import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {
  /*
  create(createDashboardDto: CreateDashboardDto) {
    return 'This action adds a new dashboard';
  }*/

  findAll() {
    return `This action returns all dashboard`;
  }
  /*
  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
*/

  /*My Program*/
  getTotalView(): any {
    return {
      status: '200',
      data: [{ id: 1, name: 'total_view', number: 756 }],
    };
  }

  getTotalAmount(): any {
    return {
      status: '200',
      data: [{ id: 1, name: 'total_amount', number: 542000 }],
    };
  }

  getTotalMember(): any {
    return {
      status: '200',
      data: [{ id: 1, name: 'total_member', number: 54000 }],
    };
  }

  getTopVDO(): any {
    const url = 'http://192.168.1.197:3000/top_vdo/';
    return {
      status: '200',
      data: [
        {
          id: 1,
          url: `${url}top_vdo01.jpg`,
          name: 'this is name01',
          owner: 'this is owner02',
        },
        {
          id: 2,
          url: `${url}top_vdo02.jpg`,
          name: 'this is name02',
          owner: 'this is owner02',
        },
        {
          id: 3,
          url: `${url}top_vdo03.jpg`,
          name: 'this is name03',
          owner: 'this is owner03',
        },
      ],
    };
  }

  getBanner(): any {
    const url = 'http://192.168.1.197:3000/banner/';
    return {
      status: '200',
      data: [
        { id: 1, url: `${url}banner01.jpg` },
        { id: 2, url: `${url}banner02.jpg` },
      ],
    };
  }

  getTopCourseViewers(): any {
    const url = 'http://192.168.1.197:3000/top_course_viewers/';
    return {
      status: '200',
      data: [
        {
          id: 1,
          url: `${url}top_course_viewers01.jpg`,
          name: 'this is course name01',
          total_view: 998,
        },
        {
          id: 2,
          url: `${url}top_course_viewers02.jpg`,
          name: 'this is course name02',
          total_view: 847,
        },
        {
          id: 3,
          url: `${url}top_course_viewers03.jpg`,
          name: 'this is course name03',
          total_view: 812,
        },
        {
          id: 4,
          url: `${url}top_course_viewers04.jpg`,
          name: 'this is course name04',
          total_view: 756,
        },
        {
          id: 5,
          url: `${url}top_course_viewers05.jpg`,
          name: 'this is course name05',
          total_view: 721,
        },
        {
          id: 6,
          url: `${url}top_course_viewers06.jpg`,
          name: 'this is course name06',
          total_view: 665,
        },
        {
          id: 7,
          url: `${url}top_course_viewers07.jpg`,
          name: 'this is course name07',
          total_view: 554,
        },
        {
          id: 8,
          url: `${url}top_course_viewers08.jpg`,
          name: 'this is course name08',
          total_view: 522,
        },
        {
          id: 9,
          url: `${url}top_course_viewers09.jpg`,
          name: 'this is course name09',
          total_view: 412,
        },
        {
          id: 10,
          url: `${url}top_course_viewers10.jpg`,
          name: 'this is course name10',
          total_view: 321,
        },
        {
          id: 11,
          url: `${url}top_course_viewers11.jpg`,
          name: 'this is course name11',
          total_view: 221,
        },

      ],
    };
  }
}
