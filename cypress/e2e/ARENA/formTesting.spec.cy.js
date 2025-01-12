/// <reference types="cypress" />

describe('Form testing', ()=>{

     it('Use valid data for completing the form ', ()=>{
        cy.visit('https://kontaktnaya-forma.testograf.ru')
      
        cy.get('header div.title').should('be.visible')
                  
        cy.get('.shortText input')
          .eq(0)
          .type('Ann')
         
        cy.get('.shortText input')
          .should('have.value','Ann')

        cy.get('.shortText input')
          .eq(1)
          .type('a_karenina@gmail.com')

        cy.get('.shortText input')
          .eq(1)
          .should('have.value','a_karenina@gmail.com')

        cy.get('.shortText input')
          .eq(2)
          .type('+7-32222300')

        cy.get('.shortText input')
          .eq(2)
          .should('have.value','+7-32222300')

        cy.get('#downshift-0-toggle-button>svg').click() 
        cy.get('.content .option').eq(0).click()
        cy.get('form input').should('have.value','Заказ')

        cy.get('.input textarea')
          .type('АБВГДеёжз')

        cy.get('.input textarea')
          .should('have.value','АБВГДеёжз')

        cy.get('button').contains('Отправить').click()

        cy.contains('Благодарим за обращение!').should('be.visible')
        cy.get('.content ').should('have.text','-\nБлагодарим за обращение!\n')

        cy.get('body')
           .should('not.contain','Ваше имя:')
           .and('not.contain','E-mail:')
           .and('not.contain','Телефон:')
   
    }) 
  
})

