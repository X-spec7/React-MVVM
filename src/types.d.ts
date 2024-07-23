
declare global {
  interface Product {
    id: number;
    name: string;
    price: number;
  };

  interface ApiResponse<T> {
    error: Error | null;
    result: T | null;
  }

  interface ProductDataSourceInterface {
    create(productData: Product): Promise<ApiResponse<boolean>>;
    deleteProduct(productId: number): Promise<ApiResponse<boolean>>;
    update(id: number, newProductData: Partial<Product>): Promise<ApiResponse<boolean>>;
    getAll(): Promise<ApiResponse<Product[]>>;
    getOne(id: number): Promise<ApiResponse<Product>>;
  }

  interface ProductRepositoryInterface {
    createProduct(productData: Product): Promise<ApiResponse<boolean>>;
    deleteProduct(productId: number): Promise<ApiResponse<boolean>>;
    updateProduct(id: number, newProductData: Partial<Product>): Promise<ApiResponse<boolean>>;
    getProducts(): Promise<ApiResponse<Product[]>>;
    getProduct(id: number): Promise<ApiResponse<Product>>;
  }

};

export {};
