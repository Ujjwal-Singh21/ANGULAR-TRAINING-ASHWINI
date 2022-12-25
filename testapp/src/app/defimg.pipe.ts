import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defimg'
})
export class DefimgPipe implements PipeTransform {

  transform(value: string, defaultimagepath: string): string {
    if(value) {
      return value;
    }
    return defaultimagepath;
  }

}
