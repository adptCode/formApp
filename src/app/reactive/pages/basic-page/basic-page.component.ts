import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]

  })

  constructor(private fb: FormBuilder) {}

  hasErrors(field: string, typeError: string) {
    return this.myForm.get(field)?.hasError(typeError) && this.myForm.get(field)?.touched
  }

  onSave(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({price: 0, inStorage: 0})
  }

}
