import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  string1 = 'Angular Pipes';

  string2 = 'Different types of pipes';

  myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  percentage = 0.245;

  salary = 1234.5;

  date: Date = new Date();

  idiom = 'es';

  activate = false;


  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('The data is ready to use');
    }, 5000);
  });

  changeLanguage(language: string): void {
    this.idiom = language;
  }

}
