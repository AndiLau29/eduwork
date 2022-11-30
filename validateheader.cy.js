it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
});

it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        expect(response.body.name).to.eq(response.body.name)
        expect(response.body.abilities.ability).equal(response.body.abilities.ability) 
    })
});