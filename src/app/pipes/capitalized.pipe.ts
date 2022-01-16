import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {

    value = value.toLocaleLowerCase();

    let names = value.split(' ');

    console.log(names);


    if (todas) {
      names.map(name => {
        names = names.map(name => {
          return name[0].toUpperCase() + name.substr(1);
        });
      });
    } else {
      console.log(names[0]);
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');
  }
}
