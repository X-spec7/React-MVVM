import { useState } from "react";

interface ProductListUseCase<T> {
  execute: () => Promise<ApiResponse<T>>;
}

const ProductListViewModel = ({ GetProductsUseCase }: { GetProductsUseCase: ProductListUseCase<Product[]> }) => {
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const { result, error } = await GetProductsUseCase.execute();
    setError(error ? error.message : "");
    if (result) {
      setProducts(result);
    }
  };

  return {
    error,
    getProducts,
    products,
  };
};

export default ProductListViewModel;
