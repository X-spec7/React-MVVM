export function UpdateProductUseCase({ ProductRepository }: { ProductRepository: ProductRepositoryInterface }) {
  return {
    async execute(id: number, newProductData: Product):Promise<ApiResponse<boolean>> {
      const { error, result } = await ProductRepository.updateProduct(id, newProductData);
      return { error, result }
    }
  }
}
