
const COLLECTION: string = "PRODUCTS";

export function getAll(): Promise<ApiResponse<Product[]>> {
  try {
    let products: Product[] = [];
    let productsString = window.localStorage.getItem(COLLECTION);
    if (productsString) {
      products = JSON.parse(productsString);
    }
    return Promise.resolve({ error: null, result: products });
  } catch (err) {
    return Promise.resolve({ error: err as Error, result: null });
  }
}

export function getOne(id: number): Promise<ApiResponse<Product>> {
  try {
    let products: Product[] = [];
    let productsString = window.localStorage.getItem(COLLECTION);
    if (productsString) {
      products = JSON.parse(productsString);
    }
    return Promise.resolve({ error: null, result: products.length >= id - 1 ? products[id] : null });
  } catch (err) {
    return Promise.resolve({ error: err as Error, result: null });
  }
}

export async function create(productData: Product): Promise<ApiResponse<boolean>> {
  let { result} = await getAll();
  let products = result || [];
  productData.id = result ? result.length : 0;
  products.push(productData);
  window.localStorage.setItem(COLLECTION, JSON.stringify(products));
  return Promise.resolve({ error: null, result: true });
}

export async function deleteProduct(id: number): Promise<ApiResponse<boolean>> {
  let { result } = await getAll();
  let products = result || [];
  let deleteIndex = products.findIndex(item => item.id === id);
  if (deleteIndex !== -1) {
    products.splice(deleteIndex, 1);
    window.localStorage.setItem(COLLECTION, JSON.stringify(products));
    return Promise.resolve({ error: null, result: true });
  }
  return Promise.resolve({ error: new Error("Item not found"), result: null });
}

export async function update(id: number, productData: Partial<Product>): Promise<ApiResponse<boolean>> {
  let { result } = await getAll();
  let products = result || [];

  let found = false;

  products.forEach(item => {
    if (item.id === id) {
      item.name = productData.name || item.name;
      item.price = productData.price || item.price;
      found = true;
    }
  });

  if (found) {
    window.localStorage.setItem(COLLECTION, JSON.stringify(products));
    return Promise.resolve({ error: null, result: true });
  }
  return Promise.resolve({ error: new Error("Item not Found"), result: null });
}
