import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, args: string): string {

    const limit = args ? parseInt(args, 10) : 10;
    const trail = '...';
    return (value != undefined && value.length > limit) ? value.substring(0, limit) + trail : value;
  }

}
