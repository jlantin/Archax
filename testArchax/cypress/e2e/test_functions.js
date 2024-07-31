class get_value{

    static get_dynamic_value (element_coin_A,  element_coin_A_marketvalue, buy_coin){
       
        cy.xpath(element_coin_A).invoke('text')
        .then((text) => {
          const substringsToRemove = ['/ coin', '$'];
          // Remove each substring
          let element_text = text;
          substringsToRemove.forEach(substring => {
            element_text = element_text.replace(new RegExp(substring, 'g'), '');
          });
          const coins_to_buy=element_text.replace('$', '')
          // Log or assert the text content
          cy.log(coins_to_buy);
          const Coins_A_value=  coins_to_buy*buy_coin;
          cy.log(Coins_A_value);
          cy.xpath(element_coin_A_marketvalue).should('contain', Coins_A_value)
        })
    }
   
}
export default get_value