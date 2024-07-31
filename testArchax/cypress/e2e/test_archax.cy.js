import get_value from "./test_functions"

 
  const buy_coin_A = '1'
  const buy_coin_B = '2'
  const buy_coin_C = '3'
  const buy_coin_D = '4'
  const element_coin_A = '//div[@class="container"]/div[1]/div[2]'
  const element_coin_A_marketvalue = '//div[@class="inventory"]/div[3]/div[3]'
    const element_coin_B = '//div[@class="container"]/div[2]/div[2]'
  const element_coin_B_marketvalue = '//div[@class="inventory"]/div[4]/div[3]'
   const element_coin_C = '//div[@class="container"]/div[3]/div[2]'
  const element_coin_C_marketvalue = '//div[@class="inventory"]/div[5]/div[3]'
   const element_coin_D = '//div[@class="container"]/div[4]/div[2]'
  const element_coin_D_marketvalue = '//div[@class="inventory"]/div[6]/div[3]'

  describe('Archax SDET exam- Lantin', () => {


  it('assert that you begin with a $1000 USD balance', () => {
    cy.visit('http://localhost:5173/')
    cy.xpath('//div[@class="actions bordered"]/div/div[2]').should('be.visible')
    cy.xpath('//div[@class="actions bordered"]/div/div[2][contains(.,"$1000")]').should('be.visible')
  })

  it('assert that there are four coin options available', () => {
    cy.visit('http://localhost:5173/')
    cy.xpath('//div[@class="ticket bordered"]').should('have.length', 4).should('be.visible')

  }) 
  it('assert "Coins owned" has incremented by the quantity you provided', () => {
    cy.visit('http://localhost:5173/')
    //coin A
    cy.xpath('//div[@class="container"]/div[1]/div[3]/input').type(buy_coin_A)
    cy.xpath('//div[@class="container"]/div[1]/button[1]').click()
    cy.xpath('//div[@class="inventory"]/div[3]/div[2]').should('contain', buy_coin_A)
    //coin B
    cy.xpath('//div[@class="container"]/div[2]/div[3]/input').type(buy_coin_B)
    cy.xpath('//div[@class="container"]/div[2]/button[1]').click()
    cy.xpath('//div[@class="inventory"]/div[4]/div[2]').should('contain', buy_coin_B)
    //coin C
    cy.xpath('//div[@class="container"]/div[3]/div[3]/input').type(buy_coin_C)
    cy.xpath('//div[@class="container"]/div[3]/button[1]').click()
    cy.xpath('//div[@class="inventory"]/div[5]/div[2]').should('contain', buy_coin_C)
    //Coin D
    cy.xpath('//div[@class="container"]/div[4]/div[3]/input').type(buy_coin_D)
    cy.xpath('//div[@class="container"]/div[4]/button[1]').click()
    cy.xpath('//div[@class="inventory"]/div[6]/div[2]').should('contain', buy_coin_D)
   
  }) 

  it('assert that the "Market value" correctly reflects the cost per coin', () => {
    cy.visit('http://localhost:5173/')
    //coin A
    cy.xpath('//div[@class="container"]/div[1]/div[3]/input').type(buy_coin_A)
    cy.xpath('//div[@class="container"]/div[1]/button[1]').click()
    get_value.get_dynamic_value(element_coin_A, element_coin_A_marketvalue, buy_coin_A)
    //coin B
    cy.xpath('//div[@class="container"]/div[2]/div[3]/input').type(buy_coin_B)
    cy.xpath('//div[@class="container"]/div[2]/button[1]').click()
    get_value.get_dynamic_value(element_coin_B, element_coin_B_marketvalue, buy_coin_B)
    //coin C
    cy.xpath('//div[@class="container"]/div[3]/div[3]/input').type(buy_coin_C)
    cy.xpath('//div[@class="container"]/div[3]/button[1]').click()
    get_value.get_dynamic_value(element_coin_C, element_coin_C_marketvalue, buy_coin_C)
    //Coin D
    cy.xpath('//div[@class="container"]/div[4]/div[3]/input').type(buy_coin_D)
    cy.xpath('//div[@class="container"]/div[4]/button[1]').click()
    get_value.get_dynamic_value(element_coin_D, element_coin_D_marketvalue, buy_coin_D)
  }) 
})