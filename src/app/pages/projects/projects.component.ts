import { Component, OnInit } from '@angular/core';
import {Project, ProjectsService} from '../../shared/projects.service';
import {TranslateService} from '../../shared/translation/translate.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public ProjectService: ProjectsService,
    private translate: TranslateService,
    private http: HttpClient
    ) {
    this.getProjects(this.translate.current_leng);
  }

  ngOnInit() {

  }

  private getProjects(len: string, page: number= 0, limit?: number,  id?: string ) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`http://${environment.url}:${environment.port}/api/v${environment.version}/projects?ln=${len}${limit ? ':lim=' + limit : ''}${id ? ':id=' + id : ''}${page ? ':page=' + page : ''}`,
      {headers: headers})
      .subscribe(
        (data: Project[]) => {
           data.map((project) => this.ProjectService.Projects.push(project));
        },
        (e) => { console.log('Error',  e); },
        () => {

        }
      );

  }
}
