const el = require ('./PerfilElements').ELEMENTS
const faker=require('faker-br')
var empresa = faker.company.companyName()
var localizacao = faker.address.city()
var conhecimento = faker.random.word()
var usuarioGithub = faker.internet.email()
var biografia = faker.random.word()

class Perfil{
    completaCadastro(){
        cy.get(el.status).click()
        cy.get(el.item)
             .then(($li) => {
            const items = $li.toArray()
            return Cypress._.sample(items)
        }).click()

        cy.get(el.campEmpresa).type(empresa)

    cy.get(el.campBlog)
        .type('https://blog.mandic.com.br/artigos/9-fontes-de-conteudo-que-todo-time-de-qa-deveria-acompanhar-em-2018/')

    cy.get(el.campLocalização).type(localizacao)

    cy.get(el.campConhecimento).type(conhecimento)

    cy.get(el.campUsuario).type(usuarioGithub)

    cy.get(el.campBiografia).type(biografia)

        cy.get(el.botao).click()
    }
    criarPerfil(){
        cy.get(el.botaoPerfil).click()
    }
    validaPerfilCriado(){
        cy.get(el.textoValido).should('contain', 'Experiências')
    }


}
export default new Perfil();