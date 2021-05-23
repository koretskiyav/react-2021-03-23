const buildParams = (data) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

const handleResponse = async (res) => {
  const data = await res.json();

  if (!res.ok) throw data;

  return data;
};

const get = (url) => fetch(url).then(handleResponse);
const post = (url, data) => fetch(url, buildParams(data)).then(handleResponse);

export default {
  loadRestaurants: () => get('/api/restaurants'),
  loadProducts: (id) => get(`/api/products?id=${id}`),
  loadReviews: (id) => get(`/api/reviews?id=${id}`),
  loadUsers: () => get('/api/users'),
  addOrder: (data) => post('/api/order', data),
};
