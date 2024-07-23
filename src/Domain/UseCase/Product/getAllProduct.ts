export function GetAllProductUseCase({ ProductRepository }: { ProductRepository: ProductRepositoryInterface }) {
  return {
    async execute(): Promise<ApiResponse<Product[]>> {
      const { error, result } = await ProductRepository.getProducts();
      return { error, result }
    }
  }
}
