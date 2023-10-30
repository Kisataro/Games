import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsGameComponent } from './rps-game.component';

describe('RpsGameComponent', () => {
  let component: RpsGameComponent;
  let fixture: ComponentFixture<RpsGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpsGameComponent]
    });
    fixture = TestBed.createComponent(RpsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
