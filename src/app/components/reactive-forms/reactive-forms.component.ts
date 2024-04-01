import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noHomeroValidator } from '../../utils/validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  userForm = this.formBuilder.group({
    name: this.formBuilder.control('', [noHomeroValidator]),
    lastName: this.formBuilder.control('',Validators.required),
    email: this.formBuilder.control('', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'), Validators.required]),
    pass: this.formBuilder.control('', [Validators.minLength(8), Validators.required])
  });

  get emailControl() {
    return this.userForm.get('email');
  };
  get passControl() {
    return this.userForm.get('pass');
  };

  get nameControl() {
    return this.userForm.get('name');
  };

 constructor(private formBuilder: FormBuilder){};

 onSubmit(): void{
  console.log('Usuario creado exitosamente.' + JSON.stringify(this.userForm.value));
 };

}
