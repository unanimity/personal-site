import { Injectable } from '@angular/core';


export interface Project {
  id: string;
  title: string;
  sub_title: string;
  category: string;
  timestamp: string;
  comments:  number;
  description: string;
  link: string;
  status: string;
  img_url: string;
  date: Date;
  color: string;

}

@Injectable()
export class ProjectsService {

public  Projects: Project [] = [] ;


  constructor() {
  this.loadTestData();
  }


  loadTestData() {
    this.Projects.push(new class implements Project {
      category = 'Social';
      id = '0';
      color = '#fa474a';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'http://sporadic.ru/';
      description = 'A site to my students club. It powered by WordPress and dinamic Theme Fasion.';
      img_url = 'http://sporadic.ru/wp-content/uploads/2018/12/P1050312.jpg';
      status = 'done';
      sub_title = 'Сайт визитка';
      timestamp: string;
      title = 'SPORADIC';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = '0';
      color = '#723dfa';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'http://www.optimumsoft.ru/';
      description = 'Desktop version of Optimum Beauty\'s consolidated price programs, Velox LLC';
      img_url = 'https://vk.com/photo-151945352_456239017';
      status = 'done';
      sub_title = 'Desctop programm';
      timestamp: string;
      title = 'Optimum Beauty';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = '0';
      color = '#fae21d';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status = 'done';
      sub_title = 'Sub tite';
      timestamp: string;
      title = 'Дефолтный проект';
    });

  }

}
