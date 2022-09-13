/// <reference types="cypress" />

describe('validação de postagens', () => {
    let token

    beforeEach(() => {
        cy.tokenApi().then((auth) =>{
            token = auth
        })
    });
    

    it('[POST] Criar uma postagem', () => {

    cy.request({

        method: 'POST',
        url: '/api/posts',
        headers: {
            Cookies: token
        },
        body: {
            "text":"envio pelo cypress"
        }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
    
    
});

describe('teste de consulta', () => {

    let token

    beforeEach(() => {
        cy.tokenApi().then((auth) =>{
            token = auth
        })
    });

    it('[GET] consulta uma postagem', () => {

        cy.request({
    
            method: 'GET',
            url: '/api/posts',
            headers: {
                Cookie: token
            }
            }).then((response) => {
                expect(response.status).to.eq(200)
        })
    })
    it('[GET] consulta uma postagem por ID', () => {
        cy.criarPostagem(token, "teste tomara que vá").then((response) =>{
            let id = response.body._id
            cy.request({
    
                method: 'GET',
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.eq(200)
            })

        })
    })
    
});
describe('testes de exclusão', () => {

    
    let token

    beforeEach(() => {
        cy.tokenApi().then((auth) =>{
            token = auth
        })
    });

    it('[DELETE] deletar uma postagem', () => {
        cy.criarPostagem(token, "teste tomara que vá").then((response) =>{
            let id = response.body._id
            cy.request({
    
                method: 'DELETE',
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.msg).to.eq("Post removido")
            })

        })
    })
    
    it('[PUT] curtir uma postagem', () => {
        cy.criarPostagem(token, "teste tomara que vá").then((response) =>{
            let id = response.body._id
            cy.request({
    
                method: 'PUT',
                url: `/api/posts/like/${id}`,
                headers: {
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.eq(200)
            })

        })
    })
    
});