import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewContainerComponent } from './overview-container.component';

describe('OverviewContainerComponent', () => {
  let component: OverviewContainerComponent;
  let fixture: ComponentFixture<OverviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
