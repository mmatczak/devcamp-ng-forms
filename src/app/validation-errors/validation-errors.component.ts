import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'dc-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent {
  @Input()
  control: FormControl;

  private static getValidationMessage(errorCode: string) {
    switch (errorCode) {
      case 'required':
        return 'Please provide a value';
      case 'startsWithM':
        return 'Please provide a value starting with \'M\'';
      case 'email':
        return 'Please provide a correct email';
      case 'emailAlreadyUsed':
        return 'Hmmm... Already registered?';
      default:
        return 'Unknown error';
    }
  }

  constructor() {
  }

  getErrors(): string[] {
    if (this.control && this.control.errors) {
      const messages = [];

      const errors = this.control && this.control.errors;
      if (errors) {
        for (const errorCode of Object.keys(errors)) {
          messages.push(ValidationErrorsComponent.getValidationMessage(errorCode));
        }
      }

      return messages;
    }
  }
}
