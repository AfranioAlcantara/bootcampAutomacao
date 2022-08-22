/// <reference types="cypress" />

import Login from "../../support/Login/LoginPage";

describe('funcionaliade login', () => {

    beforeEach(() => {
        Login.acessarLogin()
    })
    

    it('Dado que o usuario esteja na tela de login Quando digitar email e senha validos entao deverá fazer login', () => {
        
        Login.fazerLogin();
        Login.validaLogin();
    
    });
    it('Dado que o usuario esteja na tela de login Quando digitar email invalido e senha valido entao não deverá fazer login', () => {
      
        Login.emailInvalido();
      Login.validaLiginInvalido();  
        
    });

    it('Dado que o usuario esteja na tela de login Quando digitar email valido e senha invalido entao não deverá fazer login', () => {

        Login.senhaInvalido();
        Login.validaSenhaInvalida();

        
    });

        
    
});