import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../shared/projects.service';
import {TranslateService} from '../../shared/translation/translate.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public ProjectService: ProjectsService,
    private translate: TranslateService
    ) {
    ProjectService.getProjects(this.translate.current_leng);
  }

  ngOnInit() {

  }


}
