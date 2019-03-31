import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  visible: boolean;

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

public ProjectTags = ['All'];


  constructor(private http: HttpClient) {

  }

  onFilter(tag_id: number) {
    console.log(this.ProjectTags[tag_id]);
    this.Projects.map(
      (project) => {
        if (project.category === this.ProjectTags[tag_id] || tag_id === 0) {
          project.visible = true;
        } else {
          project.visible = false;
        }
      }
    );
  }

  public getProjects(len: string, page: number= 0, limit?: number,  id?: string ) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.Projects = [];
    return this.http.get(`http://${environment.url}:${environment.port}/api/v${environment.version}/projects?ln=${len}${limit ? ':lim=' + limit : ''}${id ? ':id=' + id : ''}${page ? ':page=' + page : ''}`,
      {headers: headers})
      .subscribe(
        (data: Project[]) => {
          data.map((project) => {this.Projects.push(project); project.visible = true; });
        },
        (e) => { console.log('Error',  e); },
        () => {
          this.getProjectTags();
        }
      );

  }
  getProjectTags() {
    this.ProjectTags = ['All'];
    this.Projects.map((project) => {this.ProjectTags.push(project.category); });
    this.ProjectTags = this.ProjectTags.filter((value, index, self) => self.indexOf(value) === index);
  }
}
