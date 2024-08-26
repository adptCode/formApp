import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  constructor(private fb: FormBuilder) {}

  hasErrors(field: string, errorType: string) {
    return this.myForm.get(field)?.hasError(errorType) && this.myForm.get(field)?.touched
  }

  onSave() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
