import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call emitter on start click', () => {
    spyOn(component.indexSelected, 'emit');
    const index = {
      min: 1,
      max: 3,
    };
    component.start();
    expect(component.indexSelected.emit).toHaveBeenCalledWith(index);
  });

  it('should call emitter on end click', () => {
    component.dataLength = 200;
    spyOn(component.indexSelected, 'emit');
    const index = {
      min: 197,
      max: 199,
    };
    component.end();
    expect(component.indexSelected.emit).toHaveBeenCalledWith(index);
  });

  it('should call emitter on previousPage click', () => {
    spyOn(component.indexSelected, 'emit');
    component.index.min = 4;
    component.index.max = 6;
    const index = {
      min: 1,
      max: 3,
    };
    component.previousPage();
    expect(component.indexSelected.emit).toHaveBeenCalledWith(index);
  });

  it('should not call emitter on previousPage click', () => {
    spyOn(component.indexSelected, 'emit');
    component.index.min = 1;
    component.index.max = 3;
    component.previousPage();
    expect(component.indexSelected.emit).toHaveBeenCalledTimes(0);
  });

  it('should call emitter on nextPage click', () => {
    spyOn(component.indexSelected, 'emit');
    component.dataLength = 200;
    component.index.min = 4;
    component.index.max = 6;
    const index = {
      min: 7,
      max: 9,
    };
    component.nextPage();
    expect(component.indexSelected.emit).toHaveBeenCalledWith(index);
  });

  it('should not call emitter on nextPage click', () => {
    spyOn(component.indexSelected, 'emit');
    component.dataLength = 200;
    component.index.min = 197;
    component.index.max = 199;
    component.nextPage();
    expect(component.indexSelected.emit).toHaveBeenCalledTimes(0);
  });
});
