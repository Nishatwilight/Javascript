import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitTest'
})
export class UnitTestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
