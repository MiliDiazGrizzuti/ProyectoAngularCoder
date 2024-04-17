import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentOrder'
})
export class StudentOrderPipe implements PipeTransform {

  transform(value: any[], sortBy: string): any[] {
    if (!value || !sortBy) {
      return value;
    }

    if (sortBy === 'alphabetical') {
      return value.sort((a, b) => a.localeCompare(b));
    } else if (sortBy === 'length') {
      return value.sort((a, b) => a.length - b.length);
    } else {
      return value;
    }
  }

}
