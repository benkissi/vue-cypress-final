import ProductCard from '../ProductCard.vue'

const productDetails = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120
  }
}

beforeEach(() => {
  cy.viewport('macbook-13')

  cy.mount(ProductCard, {
    props: {
      item: productDetails
    }
  }).then(({ wrapper }) => {
    cy.wrap(wrapper).as('vue')
  })
})

describe('<ProductCard />', () => {
  it('renders details', () => {
    cy.contains(productDetails.title).should('be.visible')
    cy.contains(productDetails.price).should('be.visible')
  })
  it('emits event', () => {
    cy.get('div').contains(productDetails.title).click()
    cy.get('@vue').should((wrapper) => {
      expect(wrapper.emitted('productClick')).to.have.length
    })
  })
})
