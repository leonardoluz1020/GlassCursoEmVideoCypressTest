describe('Teste de interface na pagina inicial do google glass', () => {
    const href = ['google-glass.html#tela', 'google-glass.html#camera', 'google-glass.html#gadgets', 'google-glass.html#sensores']
    beforeEach(() => {
        cy.visit('../../../src/index.html')
    })
    it('Verificando Titulo da Pagina', () => {
        cy.title().should('be.equal', 'Tudo sobre Google Glass');
    })
    it('Verificando links da pagina ', () => {
        cy.contains('a', 'Project Glass').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target')
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Facebook').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target')
        cy.contains('a', ' Twitter').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target')
    })
    it('Verificando fotos', () => {
        cy.get('.foto-legenda').should('be.visible')
    })
    it('Verificando titulos e subtitulos', () => {
        cy.contains('h1', 'Google Glass').should('be.visible')
        cy.contains('h1', 'Saiba tudo sobre o Google Glass').should('be.visible')
        cy.contains('h1', 'Menu Principal').should('be.not.visible').invoke('show').should('be.visible')
        cy.contains('h1', 'Outras Notícias').should('be.visible')
        cy.contains('h2', 'A revolução do Google está chegando').should('be.visible')
        cy.contains('h2', 'por Gustavo Guanabara').should('be.visible')
        cy.contains('h2', 'O que é').should('be.visible')
        cy.contains('h2', 'Google Glass').should('be.visible')
        cy.contains('h2', 'Especificações Técnicas').should('be.visible')
        cy.contains('h2', 'Como funciona').should('be.visible')
        cy.contains('h2', 'que você pode fazer com o Google Glasses').should('be.visible')
        cy.contains('h2', 'Vídeo mais recente').should('be.visible')
        cy.contains('h3', 'Tecnologia > Inovações').should('be.visible')
        cy.contains('h3', ' Atualizado em 23/Abril/2013').should('be.visible').invoke('show').should('be.visible')
        cy.contains('h3', 'Google Glass').should('be.not.visible')
        cy.contains('caption', 'Técnica do Google Glass ').should('be.visible')
        cy.get('tbody tr').should('have.length', 6)
    })
    it('Verificando rodapé', () => {
        cy.get('#rodape > p').should('be.visible')
        cy.contains('#rodape', 'Copyright © 2021 - by Leonardo Oliveira Da Luz').should('be.visible')
    })
    it('Verificando videos da tela inicial', () => {
        cy.get('#filme-corpo').should('be.visible').click()
        cy.get('#filme').should('be.visible').click()
    })
    it('Verificando links da tela de Especificações', () => {
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Facebook').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target')
        cy.contains('a', ' Twitter').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target')
    })
    it('Verificando posicionamento de click do oculos glass', () => {
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.get('area').then(($area) => {
            for (let i = 0; i < $area.length; i++) {
                cy.wrap($area[i]).should('have.attr', 'href', href[i])
            }
        })
    })
    it.only('Verificando link de fotos', () =>{
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
    })
})