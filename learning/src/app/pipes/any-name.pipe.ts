import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anyName'
})
export class AnyNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
