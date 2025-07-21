import api from './axiosconfig.js';

async function getAllProducts() {
  console.log('poziv service.js => getAllProducts');
  const response = await api.GET('');
  const products = [];
  response.products.forEach((p) => {
    products.push({
      id: p.id,
      title: p.title,
      category: p.category,
      price: p.price,
      availability: p.availabilityStatus,
    });
  });
  return products;
}

async function getProductById(id) {
  const response = await api.GET(`/${id}`);
  return response;
}

export { getAllProducts, getProductById };
