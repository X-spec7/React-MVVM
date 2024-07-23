export function DeleteProductUseCase({ ProductRepository }: { ProductRepository: ProductRepositoryInterface }) {
  return {
    async execute(productId: number): Promise<ApiResponse<boolean>> {
      const { error, result } = await ProductRepository.deleteProduct(productId);
      return { error, result }
    }
  }
}
