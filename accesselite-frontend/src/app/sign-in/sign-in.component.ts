import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Formulário enviado:', this.signInForm.value);
      // Lógica para enviar dados ao backend
    }
  }

  signInWithGoogle(): void {
    console.log('Entrando com Google...');
    // Lógica para integrar com a API do Google
  }

  signInWithFacebook(): void {
    console.log('Entrando com Facebook...');
    // Lógica para integrar com a API do Facebook
  }
}