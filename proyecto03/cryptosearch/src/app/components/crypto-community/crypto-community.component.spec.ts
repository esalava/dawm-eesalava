import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCommunityComponent } from './crypto-community.component';

describe('CryptoCommunityComponent', () => {
  let component: CryptoCommunityComponent;
  let fixture: ComponentFixture<CryptoCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
