import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToInches2'
})
export class ConvertToInches2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
