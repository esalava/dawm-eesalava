import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSquareComponent } from './crypto-square.component';

describe('CryptoSquareComponent', () => {
  let component: CryptoSquareComponent;
  let fixture: ComponentFixture<CryptoSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
