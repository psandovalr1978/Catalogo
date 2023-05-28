import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/sesion/sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
  f!: FormGroup;

  constructor(private fb: FormBuilder, private sesionService:SesionService, private router:Router){}

  get Formvalido():boolean{
    return this.f.valid;
  }

  ngOnInit(): void {
    this.f = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passWord: ['', Validators.required],
    });
  }

  submit(){
    this.sesionService.login(this.f.value);
    if(!this.sesionService.LoginValido){
      Swal.fire({
        icon: 'error',
        title: 'Inicio de sesión incorrecto',
        text: 'Las credenciales de inicio de sesión son incorrectas. Por favor, inténtelo de nuevo.',
        confirmButtonText: 'OK',
        // footer: '<a href="#">¿Olvidaste tu contraseña?</a>'
      });
    }
    else{
      this.router.navigate(['/Catalogos']);
    }
  }
}
