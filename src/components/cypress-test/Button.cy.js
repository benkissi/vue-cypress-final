import Button from '../Button.vue'

beforeEach(() => {
  cy.mount(Button, {
    slots: {
      default: 'Hello there!'
    }
  }).then(({ wrapper }) => {
    cy.wrap(wrapper).as('vue')
    console.log('wrraper', wrapper)
  })
})

describe('<Button />', () => {
  it('should render button text', () => {
    cy.contains('Hello there!').should('be.visible')
  })

  it('should emit event when clicked', () => {
    cy.get('div').contains('Hello there!').click()

    cy.get('@vue').should((wrapper) => {
      expect(wrapper.emitted('click')).to.have.length
    })
  })
})
