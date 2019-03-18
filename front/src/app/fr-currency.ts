import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'frCurrency'
})
export class FrCurrency implements PipeTransform {
  transform(value: any): string {
    return (value.substr(1) + ' ' + value.substr(0, 1)).split(',').join(' ');
  }
}
