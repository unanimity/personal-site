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

  }

  onFilter(tag_id: number) {
    console.log(this.ProjectTags[tag_id]);
  }



}
