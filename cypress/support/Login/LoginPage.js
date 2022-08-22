//ações que serão executadas na pagia de login

const el = require('./LoginElements').ELEMENTS;

class Login {
    acessarLogin(){
        cy.visit('https://conexaoqa.herokuapp.com/login')
    }
    fazerLogin(){
        cy.get(el.cmpEmail).type('wanrrelsen21@gmail.com')
        cy.get(el.cmpSenha).type('123456')
        cy.get(el.btnLogin).click()
    }
    validaLogin(){
        cy.get(el.assertBemvindo).should('contain' , 'Bem-vindo')
         
        
    }
    emailInvalido(){
        cy.get(el.cmpEmail).type('asdadsadsad')
        cy.get(el.cmpSenha).type('123456')
        cy.get(el.btnLogin).click()
    }
    validaLiginInvalido(){
        cy.get(el.assertEmail).should('contain', 'Digite um email válido')
    }
    senhaInvalido(){
        cy.get(el.cmpEmail).type('wanrrelsen21@gmail.com')
        cy.get(el.cmpSenha).type('35424354')
        cy.get(el.btnLogin).click()
    }
    validaSenhaInvalida(){
    cy.get(el.assertSenha).should('contain', 'Credenciais inválidas')
    }


}

export default new Login();