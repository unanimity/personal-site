import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(protected ProjectService: ProjectsService) { }

  ngOnInit() {
  }

}
