import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, startsWithMValidator]],
      email: ['', [Validators.required, Validators.email], [emailAlreadyUsedAsyncValidator]]
    });
  }

  send(): void {
    if (this.form.valid) {
      console.log('Sending ' + this.form.get('name').value + ', ' + this.form.get('email').value);
    }
  }
}

function startsWithMValidator(control: AbstractControl): ValidationErrors | null {
  if (control && control.value && control.value.length > 0 && control.value[0] !== 'M') {
    return {startsWithM: true};
  }
  return null;
}

function emailAlreadyUsedAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  return Observable.create(function (observer: Observer<ValidationErrors | null>) {
    setTimeout(function () {
      if (control && control.value && control.value === 'mmatczak@devcamp.com') {
        observer.next({emailAlreadyUsed: true});
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 3000);
  });
}
