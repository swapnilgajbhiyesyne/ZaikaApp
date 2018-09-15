import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ItemfilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'itemfilter',
})
export class ItemfilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any[],searchText: string):any[] {
    console.log(value)
    if(!searchText) return value;
    //return value.toLowerCase();
    // Create a new Array
    var filtered = [];
    // loop through existing Array
    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      // check if the individual Array element begins with `a` or not
      if (item.name.includes(searchText)) {
        // push it into the Array if it does!
        filtered.push(item);
      }
    }
    // boom, return the Array after iteration's complete
    return filtered;
  }
}
