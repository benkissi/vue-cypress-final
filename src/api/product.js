import axios from 'axios'

export const fetchProductsApi = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    return {
      success: true,
      data: res.data
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}

export const fetchProductApi = async (id) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return {
      success: true,
      data: res.data
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}
