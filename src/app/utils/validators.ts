import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const noHomeroValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>{
    
    if (typeof control.value === 'string' && control.value.toLocaleLowerCase().includes('homero')){
        return{
            noHomero: true,
        }
    }
    
    return null;
};