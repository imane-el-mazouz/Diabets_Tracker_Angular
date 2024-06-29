import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGlycemieFormComponent } from './update-glycemie-form.component';

describe('UpdateGlycemieFormComponent', () => {
  let component: UpdateGlycemieFormComponent;
  let fixture: ComponentFixture<UpdateGlycemieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGlycemieFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGlycemieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
