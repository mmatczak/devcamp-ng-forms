import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent
      ],
      imports: [MatToolbarModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
