import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = ( control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();
    if(value === 'strider') {
      return {
        noStrider: true
      }
    }

    return null
  }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualToFieldTwo( fieldOne: string, fieldTwo: string ) {
    return (formGrup: AbstractControl): ValidationErrors | null => {

      const fieldValue1 = formGrup.get(fieldOne)?.value;
      const fieldValue2 = formGrup.get(fieldTwo)?.value;

      if(fieldValue1 !== fieldValue2) {
        formGrup.get(fieldTwo)?.setErrors({ notEqual: true })
        return { notEqual: true }
      }

      formGrup.get(fieldTwo)?.setErrors(null)

      return null;

    }
  }

}



