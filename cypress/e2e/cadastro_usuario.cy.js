///<reference types="cypress" />

import commum_page from "../support/pages/commum_page.js"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page.js"


describe ('Cadastro de usuário', ()=> {
    beforeEach('Acessar cadastro de usuário', ()=> {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        
    })

    it('Campo e-mail inválido', () => {
        
    })

    it('Campo senha vazio', () => {
        
    })

    it('Cadastro com sucesso', () => {
        
    })
})