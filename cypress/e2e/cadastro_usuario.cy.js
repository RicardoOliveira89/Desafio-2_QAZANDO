///<reference types="cypress" />

import { faker } from "@faker-js/faker"
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
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.person.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválido', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(name)
    })
})