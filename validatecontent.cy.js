it.only('Validate Content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('body').should('include', {name: "ditto"})
});

it('Update user', () => {
    var newUser = {
        "name": 'Andilau',
        "job": 'Mekanik'
    } 
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(newUser.name)
    })
})

it('Validate Content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu').as('pikachu')
    cy.get('@pikachu').its('body').should('include', { name: "pikachu" })

})