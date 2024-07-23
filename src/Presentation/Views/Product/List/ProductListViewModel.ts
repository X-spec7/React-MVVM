import { useState } from "react";

interface ProductListUseCase<T> {
  execute: () => Promise<ApiResponse<T>>;
}

const ProductListViewModel = ({ GetAllProductUseCase }: { GetAllProductUseCase: ProductListUseCase<Product[]> }) => {
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const { result, error } = await GetAllProductUseCase.execute();
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
