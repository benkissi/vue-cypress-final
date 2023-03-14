import { createTestingPinia } from '@pinia/testing'
import ToggleFeature from '../ToggleFeature.vue'
import { useProductStore } from '../../stores/product'
import { formatDate } from '../../utils/methods'

beforeEach(() => {
  cy.viewport('macbook-13')
  createTestingPinia({
    initialState: {
      // ... initialize your store here
      isEnabled: false
    },

    createSpy: cy.spy,
    stubActions: false
  })
  cy.wrap(useProductStore()).as('productStore')
  cy.mount(ToggleFeature).then(({ wrapper }) => {
    cy.wrap(wrapper).as('vue')
  })
})

describe('<ToggleFeature />', () => {
  it('should render', () => {
    const date = formatDate(new Date())
    cy.contains('Product list feature is Disabled').should('be.visible')
    cy.contains('Enable').should('be.visible')
    cy.contains(date).should('be.visible')
  })

  it('should toggle feature', () => {
    cy.get('div').contains('Enable').click()
    cy.contains('Product list feature is Enabled').should('be.visible')
    cy.contains('Disable').should('be.visible')
  })
})
