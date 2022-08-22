/// <reference types="cypress" />
import Cadastro from '../../support/cadastro/CadastroPage';
import Perfil from '../../support/CriarPerfil/PerfilPage';


describe('', () => {
    beforeEach(() => {
       
        cy.visit('cadastrar')
        Cadastro.realizaCadastro();
        Perfil.criarPerfil();
    });
 it('Concluir Cadastro Com sucesso', () => {
        Perfil.completaCadastro();
        Perfil.validaPerfilCriado();

});



});