import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string) {
    return value.charAt(0).toUpperCase()+value.slice(1).replace(/[a-z]/g, '').replace(' ', '');
  }
}
