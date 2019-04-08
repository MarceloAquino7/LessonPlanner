import { Component, OnInit } from '@angular/core';
import { Validacoes } from '../../classes/validacoes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterUser } from '../../classes/register-user';
import { UserCollectorService } from '../../collectors/user/user-collector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', './menu.component.css' ]
})
export class UserComponent implements OnInit {


  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserCollectorService, private router: Router) { }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }

  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new RegisterUser();
    usuario.Name = dadosFormulario.nome;
    usuario.Email = dadosFormulario.email;
    usuario.CPF = dadosFormulario.cpf;
    usuario.DateBirth = dadosFormulario.nascimento;
    usuario.Password = dadosFormulario.senha;

    this.userService.createUser(usuario);

    this.formularioDeUsuario.reset();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group(
      {
        nome: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ])
        ],
        email: ['', Validators.compose([Validators.email])],
        cpf: [
          '',
          Validators.compose([Validators.required, Validacoes.ValidaCpf])
        ],
        nascimento: [
          '',
          Validators.compose([Validators.required, Validacoes.MaiorQue18Anos])
        ],
        senha: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
        ],
        confirmarSenha: ['', Validators.compose([Validators.required])]
      },
      {
        validator: Validacoes.SenhasCombinam
      }
    );
  }

  // Propriedades do formulário que vamos utilizar para obter os erros
  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

  get cpf() {
    return this.formularioDeUsuario.get('cpf');
  }

  get nascimento() {
    return this.formularioDeUsuario.get('nascimento');
  }

  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }

}
