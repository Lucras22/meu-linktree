import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCardComponent } from './link-card';

describe('LinkCard', () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
