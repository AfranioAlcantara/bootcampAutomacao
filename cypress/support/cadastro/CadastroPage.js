const el = require ('./CadastroElements').ELEMENTS
const faker=require('faker-br')
        var email = faker.internet.email()
        var nome = faker.name.firstName()
        var senha = faker.internet.password()

class Cadastro {
    realizaCadastro(){
        cy.get(el.campRegisterName).type(nome)
        cy.get(el.campRegisterEmail).type(email)
        cy.get(el.campRegisterSenha).type(senha)
        cy.get(el.campRegisterSenha2).type(senha)
        cy.get(el.btnRegister).click()
        cy.get(el.bemVindo).should('contain','Bem-vindo')
        
    }

    realizaCadastroinvalido3(){
        cy.get(el.campRegisterName).type(nome)
        cy.get(el.campRegisterEmail).type(email)
        cy.get(el.campRegisterSenha2).type(senha)
        cy.get(el.btnRegister).click()
        cy.get(el.txt3).should('contain', 'Senhas precisam ser idênticas')
    }

    realizaCadastroinvalido2(){
        cy.get(el.campRegisterName).type(nome)
        cy.get(el.campRegisterSenha).type(senha)
        cy.get(el.campRegisterSenha2).type(senha)
        cy.get(el.btnRegister).click()
        cy.get(el.txt2).should('contain', 'Email é obrigatório')
    }

    realizaCadastroInvalido(){
        cy.get(el.campRegisterEmail).type(email)
        cy.get(el.campRegisterSenha).type(senha)
        cy.get(el.campRegisterSenha2).type(senha)
        cy.get(el.btnRegister).click()
        cy.get(el.txt).should('contain', 'Email é obrigatório')
    }
    realizaCadastroinvalido4(){
        cy.get(el.campRegisterName).type(nome)
        cy.get(el.campRegisterEmail).type(email)
        cy.get(el.campRegisterSenha).type(senha)
        cy.get(el.btnRegister).click()
        cy.get(el.txt3).should('contain', 'Confirmar senha é obrigatória')
    }


}

export default new Cadastro();