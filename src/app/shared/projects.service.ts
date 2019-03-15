import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface Project {
  id: string;
  title: string;
  sub_title: string;
  category: string;
  timestamp: string;
  comments:  number;
  description: string;
  link: string;
  status: number;
  img_url: string;
  date: Date;
  color: string;
  language: string;

}
enum ProjectStatus {
  Default,
  Terminated,
  Finished,
  Developing
}
@Injectable()
export class ProjectsService {

public  Projects: Project [] = [] ;

public ProjectTags = ['All', 'Website', 'Mobile app', 'Desktop', 'Social'];


  constructor() {
  this.loadTestData();
  }

  onFilter(tag_id: number) {
    console.log(this.ProjectTags[tag_id]);
  }

  loadTestData() {
    this.Projects.push(new class implements Project {
      category = 'Website';
      id =  uuid();
      color = '#fa474a';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'http://sporadic.ru/';
      description = 'A site to my students club. It powered by WordPress and dinamic Theme Fasion.';
      img_url = 'images/sporadic.jpg';
      status =  ProjectStatus.Default;
      sub_title = 'Web site';
      timestamp: string;
      title = 'SPORADIC';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Desktop';
      id = uuid();
      color = '#723dfa';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'http://www.optimumsoft.ru/';
      description = 'Desktop version of Optimum Beauty\'s consolidated price programs, Velox LLC';
      img_url = 'images/optimum.jpg';
      status =  ProjectStatus.Default;
      sub_title = 'Desctop programm';
      timestamp: string;
      title = 'Optimum Beauty';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Mobile app';
      id = uuid();
      color = '#fab100';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'http://runlimit.com';
      description = 'An application for selecting the size of a motorcycle helmet using recognition.\n' +
        'Development of a mobile application on Kotlin and server side on Node.JS+MySQL';
      img_url = 'images/runlimit.jpg';
      status = ProjectStatus.Default;
      sub_title = 'Android App & Server';
      timestamp: string;
      title = 'RUNLIMIT';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Website';
      id = uuid();
      color = '#fa6a12';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Education portal';
      timestamp: string;
      title = 'SwiftBook';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#fae21d';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = 'Two Russian satellites are planned to be activated inside the International Space Station (ISS) Russian Segment as part of a verification test from July 4-8.\n' +
        '\n' +
        'The satellites will eventually be deployed by hand from the ISS during a Russian space walk tentatively scheduled for August 17, 2017.\n' +
        '\n' +
        'The satellites Tanusha 1 and Tanusha 2 [спутники Тануша 1/2] FM transmissions on 437.050 MHz, will be downlinked at 145.800 MHz FM. Transmissions from Tanusha 1 should begin around 18:30 UT on July 4. Transmissions will cease on July 6 from 08:20 till 18:00 UT to allow the satellites to be swapped out. Tanusha 2 will then be activated beginning on July 6 around 18:00 UT and continue until July 8 at 10:30 UT.\n' +
        'The satellites will broadcast greeting messages in Russian, English, Spanish and Chinese. More details will be made available on the Southwest Western State University site at https://www.swsu.ru/';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'Russian Satellites Tanusha 1 and 2';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#a3fa8f';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'Дефолтный проект';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#7af3fa';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = '«Ecuador UTE-ЮЗГУ» RS3S';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#fa6173';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'Tomsk-TPU-120';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#fa6173';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'Dobrie dela';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#1f6e16';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'iMatreshka';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#fa6173';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'Hack-Kursk "IT Vocation"';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#290d91';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = ' PixelBook.ru';
      language = 'en';
    });
    this.Projects.push(new class implements Project {
      category = 'Free project';
      id = uuid();
      color = '#fa6173';
      comments = 30;
      // date= { date.day=12; month=12 };
      date = new Date('12.12.12');
      link = 'www.vk.com';
      description = ' ';
      img_url = 'https://avatars.mds.yandex.net/get-pdb/1041965/67cc6142-111a-49ec-9b6c-83ae33ee1ca1/orig';
      status =  ProjectStatus.Default;
      sub_title = 'Firmware & Electronics';
      timestamp: string;
      title = 'Dobrie dela';
      language = 'en';
    });

  }

}
