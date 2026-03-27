export async function getProducts() {
  try {

    const response = await fetch('https://homework-api.noevchanmakara.site/api/v1/products', {
      cache: 'no-store' 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    
    return data?.payload || []; 
    
  } catch (error) {
    console.error("Fetch Error:", error);
    return []; 
  }
}