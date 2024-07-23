export function GetProductByIdUseCase({ ProductRepository }: { ProductRepository: ProductRepositoryInterface }) {
  return {
    async execute(productId: number): Promise<ApiResponse<Product>> {
      const { error, result } = await ProductRepository.getProduct(productId);
      return { error, result }
    }
  }
}
