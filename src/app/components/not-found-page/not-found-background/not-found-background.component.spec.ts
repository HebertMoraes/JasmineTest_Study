import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundBackgroundComponent } from './not-found-background.component';

describe('NotFoundBackgroundComponent', () => {
  let component: NotFoundBackgroundComponent;
  let fixture: ComponentFixture<NotFoundBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
