import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent {
  userName: string = '';
  errorMessages: any = {}; // Initialize with an empty object
  submitted: boolean = false;

  setError(field: string, errorMessage: string) {
    this.errorMessages = { ...this.errorMessages, [field]: errorMessage };
  }

  clearError(field: string) {
    this.errorMessages = { ...this.errorMessages, [field]: null };
  }

  isFormValid(): boolean {
    let isValid = true;

    // Perform validation for required fields and email
    const requiredFields = [
      { field: 'userName', label: 'Username' },
    ];

    for (const requiredField of requiredFields) {
      if (!this[requiredField.field as keyof this]) {
        this.setError(requiredField.field, `${requiredField.label} is required`);
        isValid = false;
      } else {
        this.clearError(requiredField.field);
      }
    }

    return isValid; // Return true if all validations pass
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      // Submit the form or perform other actions
    }
  }
}
