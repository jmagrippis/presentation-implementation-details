const { cy } = window

describe('change username', function() {
  it('goes through smoothly', function() {
    cy.visit('/')

    cy.findByLabelText('Username').type('jma')
    cy.findByText(/claim/i).click()
    cy.findByText(/too short/i)

    cy.findByLabelText('Username')
      .clear()
      .type('-jmag')
    cy.findByText(/claim/i).click()
    cy.findByText(/only use char/i)

    cy.findByLabelText('Username')
      .clear()
      .type('jmagrippis')
    cy.findByText(/claim/i).click()
    cy.findByText(/not available/i)

    cy.findByLabelText('Username')
      .clear()
      .type('notjmagrippis')
    cy.findByText('Claim').click()
    cy.findByText(/claim it/i)
  })
})
