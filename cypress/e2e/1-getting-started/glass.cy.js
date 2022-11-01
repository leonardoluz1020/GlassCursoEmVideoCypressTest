describe('Teste de interface na pagina inicial do google glass',()=>{
    beforeEach(()=>{
        cy.visit('../../../src/index.html')
    })
    it('Verificando Titulo da Pagina',()=>{
        cy.title().should('be.equal','Tudo sobre Google Glass');
    })
    it('Verificando links da pagina ',()=>{
        cy.contains('a','Home').should('be.visible').click()
        cy.contains('a','Especificações').should('be.visible').click()
        cy.contains('a','Fotos').should('be.visible').click()
        cy.contains('a','Multimídia').should('be.visible').click()
        cy.contains('a','Fale conosco').should('be.visible').click()

    })
})