import {Component, OnInit, Output} from '@angular/core';
import { personen as personenSource } from '../../personen';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.scss']
})
export class CsvViewerComponent implements OnInit {
  @Output() onSelected;
  personen: any[] = [];
  index: object = {
    min: 1,
    max: 3
  };

  constructor() { }

  ngOnInit() {
    const personenZeilen = this.createArrayFromString(personenSource);
    this.separateArrayIntoObjects(personenZeilen);
  }

  createArrayFromString(str: string) {
    return str.split('\n').map((item) => {
        return item.split(';');
    });
  }

  separateArrayIntoObjects(data: any[]) {
    data.forEach((item) => {
       this.personen.push({
          name: item[0] + ' ' + item[1],
          address: item[2] + ' ' + item[3],
          age: item[4]
       });
    });
  }

  onIndexSelected(index: object) {
    this.index = index;
  }
}
