/// <reference types="cypress" />
import Cadastro from '../../support/cadastro/CadastroPage';
        

describe('Funcionalidade cadasrtro', () => {
   

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('deve fazer cadastro com sucesso', () => {

         Cadastro.realizaCadastro();

    });

    it('deve fazer cadastro sem sucesso', () => {
        
        Cadastro.realizaCadastroInvalido();

     });

     it('cadastro sem sucesso', () => {
        
        Cadastro.realizaCadastroinvalido2();

   });

   it('cadastro sem sucesso', () => {
    
    Cadastro.realizaCadastroinvalido3();

});

it('cadastro sem sucesso', () => {
    
    Cadastro.realizaCadastroinvalido4();
    
});

});