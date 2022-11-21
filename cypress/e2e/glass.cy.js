describe('Teste de interface na pagina inicial do google glass', () => {
    const href = ['google-glass.html#tela', 'google-glass.html#camera', 'google-glass.html#gadgets', 'google-glass.html#sensores']
    beforeEach(() => {
        cy.visit('../../../src/index.html')
    })
    it('Verificando Titulo da Pagina inicial', () => {
        cy.title().should('be.equal', 'Tudo sobre Google Glass');
    })
    it('Verificando links da pagina inicial ', () => {
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
    it('Verificando fotos da tela inicial ', () => {
        cy.get('.foto-legenda').should('be.visible')
    })
    it('Verificando titulos e subtitulos da tela inicial', () => {
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
    it('Verificando rodapé da tela inicial', () => {
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
    it('Verificar descrições da pagina de especificações', () => {
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('h1','Raio-X no Google Glass').should('be.visible')
        cy.contains('h2','por Gustavo Guanabara').should('be.visible')
        cy.contains('h3','Glass > Especificações').should('be.visible')
    })
    it('Verificando posicionamento de click do oculos glass tela especificações', () => {
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.get('area').then(($area) => {
            for (let i = 0; i < $area.length; i++) {
                cy.wrap($area[i]).should('have.attr', 'href', href[i])
            }
        })
    })
    it('Verificando rodapé da tela especificações', () => {
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.get('#rodape > p').should('be.visible')
        cy.contains('#rodape','Copyright © 2021 - by Leonardo Oliveira').should('be.visible')
    })
    it('Verificando links da tela de fotos', () =>{
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
    })
    it('Verificando descrições da tela de Fotos',() => {
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('h1','Galeria de Imagens do Google Glass').should('be.visible')
        cy.contains('h2','por Gustavo Guanabara').should('be.visible')
        cy.contains('h3','Glass > Fotos').should('be.visible')
    })
    it('Verificado fotos da galeria da tela de fotos',() => {
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.get('#foto01').should('be.visible')
        cy.get('#foto02').should('be.visible')
        cy.get('#foto03').should('be.visible')
        cy.get('#foto04').should('be.visible')
        cy.get('#foto05').should('be.visible')
        cy.get('#foto06').should('be.visible')
        cy.get('ul#album-fotos').as('todos')
        cy.get('@todos')
    })
    it('Verificando rodapé da tela de fotos', () => {
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.get('#rodape > p').should('be.visible')
        cy.contains('#rodape','Copyright © 2021 - by Leonardo Oliveira').should('be.visible')
    })
    it('Verificando links de multimídia',() => {
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
    })
    it('Verificando descrições de tela de multimídia',() => {
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.contains('h1','Sons e Vídeos').should('be.visible')
        cy.contains('h2','por Gustavo Guanabara').should('be.visible')
        cy.contains('h3','Glass > Multimídia').should('be.visible')
    })
    it('Verificando mídias de tela de multimídia',() => {
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.get('audio').should('be.visible').click()
        cy.get('video').should('be.visible').click()
    })
    it('Verificando rodapé da tela de multimídia', () => {
        cy.contains('a', 'Multimídia').should('be.visible').click()
        cy.get('#rodape > p').should('be.visible')
        cy.contains('#rodape','Copyright © 2021 - by Leonardo Oliveira').should('be.visible')
    })
    it('Verificar links de fale conosco', ()=>{
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Home').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Especificações').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('a', 'Fotos').should('be.visible').click()
        cy.contains('a', 'Fale conosco').should('be.visible').click()
    })    
    it('Verificando descrições de tela de fale conosco',() => {
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.contains('h1','Formulário de Contato').should('be.visible')
        cy.contains('h2','por Gustavo Guanabara').should('be.visible')
        cy.contains('h3','Fale Conosco > Contato').should('be.visible')
    })
    it('Verificando rodapé da tela de fale conosco', () => {
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.get('#rodape > p').should('be.visible')
        cy.contains('#rodape','Copyright © 2021 - by Leonardo Oliveira').should('be.visible')
    })
    it('Preenchendo formulario', ()=> {
        const testLong = 'Precisamos aprender Cypress URGENTE para entrarmos na area de analista de teste automatizado Precisamos aprender Cypress URGENTE para entrarmos na area de analista de teste automatizado Precisamos aprender Cypress URGENTE para entrarmos na area de analista de teste automatizado Precisamos aprender Cypress URGENTE para entrarmos na area de analista de teste automatizado'; // variavel com texto
        cy.contains('a', 'Fale conosco').should('be.visible').click()
        cy.get('#cNome').should('be.visible').type('Leonardo Oliveira Luz').should('have.value','Leonardo Oliveira Luz')
        cy.get('#cSenha').should('be.visible').type('12345678').should('have.value','12345678')
        cy.get('#cMail').should('be.visible').type('leo@hotmail.com').should('have.value','leo@hotmail.com')
        cy.get('#cMasc').should('be.visible').check().should('be.checked')
        cy.get('#cFem').should('be.visible').check().should('be.checked')
        cy.get('#cNasc').should('be.visible').type('1986-03-11').should('have.value','1986-03-11')
        cy.get('#cRua').should('be.visible').type('Rua da vitoria e conquistas').should('have.value','Rua da vitoria e conquistas')
        cy.get('#cNum').should('be.visible').type('36').should('have.value','36')   
        cy.get('#cEst').select('SP').should('have.value', 'SP')
        cy.get('#cCid').should('be.visible').type('São Paulo').should('have.value','São Paulo')
        cy.get('#cUrg').should('be.visible').type('10').should('have.value','10')
        cy.get('#cMsg').should('be.visible').type(testLong, {delay:0}).should('have.value',testLong)
        cy.get('#cPed').uncheck().should('not.be.checked')
        cy.get('#cPed').check().should('be.checked')
        cy.get('#cCor').type('#000000').should('have.value','#000000')
        cy.get('#cQtd').type(3).should('have.value','3')
        cy.get('#cTot').should('have.value','4500')
        //cy.contains('input[type="image"]','tEnviar')
        //cy.get('input[type="image"]').should('have.attr', 'href', '_imagens/botao-enviar.png')
 


    })
})