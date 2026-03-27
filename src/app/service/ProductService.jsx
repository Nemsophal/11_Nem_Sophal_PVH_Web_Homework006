const BASE_URL = "https://homework-api.noevchanmakara.site/api/v1";

export const ProductService = {
  getProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  },
  getProductById: async (productId) => {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  }
};