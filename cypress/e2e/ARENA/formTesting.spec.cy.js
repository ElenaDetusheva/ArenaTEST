/// <reference types="cypress" />
import happyPass from "../../fixtures/happyPass.json";
describe('Form testing', ()=>{

     it('Use valid data for completing the form ', ()=>{
      const goals = ['Заказ','Вопрос о товаре','Вопрос в тех.поддержку','Отзыв','Жалоба','Другое']
        cy.visit('https://kontaktnaya-forma.testograf.ru')
      
        cy.get('header div.title').should('be.visible')
                  
        cy.get('.shortText input')
          .eq(0)
          .type(happyPass.name)
         
        cy.get('.shortText input')
          .should('have.value',happyPass.name)

        cy.get('.shortText input')
          .eq(1)
          .type(happyPass.email)

        cy.get('.shortText input')
          .eq(1)
          .should('have.value',happyPass.email)

        cy.get('.shortText input')
          .eq(2)
          .type(happyPass.phone)

        cy.get('.shortText input')
          .eq(2)
          .should('have.value',happyPass.phone)

        cy.get('#downshift-0-toggle-button>svg').click() 
        cy.get('.content .option')
          .eq(0)
          .click()
        cy.get('form input').should('have.value','Заказ')
       
        cy.get('.input textarea')
          .type(happyPass.message)

        cy.get('.input textarea')
          .should('have.value',happyPass.message)

        cy.get('button').contains('Отправить').click()

        cy.contains('Благодарим за обращение!').should('be.visible')
        cy.get('.content ').should('have.text','-\nБлагодарим за обращение!\n')

        cy.get('body')
           .should('not.contain','Ваше имя:')
           .and('not.contain','E-mail:')
           .and('not.contain','Телефон:')
       }) 
  
})

