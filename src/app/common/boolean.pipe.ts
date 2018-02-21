import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolen'
})
export class BooleanPipe implements PipeTransform {

 transform(value: any, ... args : any[]) {
     return value ? 'SI' : 'NO';
 }

}