it('Add a new user', () => {
    var user = {
        "name": 'Andi Maulana',
        "job": 'QA automation'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)  
    })
})