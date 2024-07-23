export function ProductRepository({ ProductDataSource }: { ProductDataSource : ProductDataSourceInterface }) {
  return {
    async createProduct(productData: Product): Promise<ApiResponse<boolean>> {
      const { result, error } = await ProductDataSource.create(productData);
      return { result, error }
    },

    async deleteProduct(productId: number): Promise<ApiResponse<boolean>> {
      const { result, error } = await ProductDataSource.deleteProduct(productId);
      return { result, error }
    },

    async updateProduct(id: number, newProductData: Partial<Product>): Promise<ApiResponse<boolean>> {
      const { result, error } = await ProductDataSource.update(id, newProductData);
      return { result, error }
    },

    async getProducts(): Promise<ApiResponse<Product[]>> {
      const { result, error } = await ProductDataSource.getAll();
      return { result, error }
    },

    async getProduct(id: number): Promise<ApiResponse<Product>> {
      const { result, error } = await ProductDataSource.getOne(id);
      return { result, error }
    }
  }
}
