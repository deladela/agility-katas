import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvViewerComponent } from './csv-viewer.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CsvViewerComponent', () => {
  let component: CsvViewerComponent;
  let fixture: ComponentFixture<CsvViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvViewerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create array from string', () => {
      const testString = 'Pope;Oleg;673-6141 Sed Street;Savannah;83\n' +
        'Beach;Alana;P.O. Box 456, 136 Ligula. Av.;Altoona;89';
      const testArray = component.createArrayFromString(testString);
      const expectedOutput = [
        ['Pope', 'Oleg', '673-6141 Sed Street', 'Savannah', '83'],
        ['Beach', 'Alana', 'P.O. Box 456, 136 Ligula. Av.', 'Altoona' , '89']
      ];
      expect(testArray).toEqual(expectedOutput);
  });

  it('should separate array into a new array with objects', () => {
    component.personen = [];
    const testArray = [
      ['Pope', 'Oleg', '673-6141 Sed Street', 'Savannah', '83'],
      ['Beach', 'Alana', 'P.O. Box 456, 136 Ligula. Av.', 'Altoona' , '89']
    ];
    component.separateArrayIntoObjects(testArray);
    const expectedOutput = [
      { name: 'Pope Oleg', age: '83', address: '673-6141 Sed Street Savannah'},
      { name: 'Beach Alana', age: '89', address: 'P.O. Box 456, 136 Ligula. Av. Altoona'}
    ];
    expect(component.personen).toEqual(expectedOutput);
  });
});
