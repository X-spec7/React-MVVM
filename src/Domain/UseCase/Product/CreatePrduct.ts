export function CreateProductUseCase({ ProductRepository }: { ProductRepository: ProductRepositoryInterface }) {
  return {
    async execute(productData: Product): Promise<ApiResponse<boolean>> {
      const { error, result } = await ProductRepository.createProduct(productData);
      return { error, result }
    }
  }
}
