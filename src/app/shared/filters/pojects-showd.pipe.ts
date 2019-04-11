import { Pipe, PipeTransform } from '@angular/core';
import {Project} from '../projects.service';

@Pipe({
  name: 'show_project',
  pure: false
})
export class ShowProjectPipe implements PipeTransform {

  transform(value: Project[], args?: any): Project[] {
    return   value.filter(project => project.visible);
  }

}
