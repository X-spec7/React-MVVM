import { useState } from "react";

interface UseCase<T> {
  execute: (id: number, data?: Partial<Product>) => Promise<ApiResponse<T>>;
}

interface ProductDetailViewModelProps {
  GetProductUseCase: UseCase<Product>;
  UpdateProductUseCase: UseCase<boolean>;
  DeleteProductUseCase: UseCase<boolean>;
}

const ProductDetailViewModel = ({
  GetProductUseCase,
  UpdateProductUseCase,
  DeleteProductUseCase,
}: ProductDetailViewModelProps) => {
  const [error, setError] = useState<string>("");
  const [productValues, setProductValues] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
  });

  const getProduct = async (id: number) => {
    const { result, error } = await GetProductUseCase.execute(id);
    setError(error ? error.message : "");
    if (result) {
      setProductValues(result);
    }
  };

  const onChange = (value: any, prop: keyof Product) => {
    setProductValues({ ...productValues, [prop]: value });
  };

  const updateProduct = async (id: number) => {
    const { error } = await UpdateProductUseCase.execute(id, productValues);
    setError(error ? error.message : "");
  };

  const deleteProduct = async (id: number) => {
    const { error } = await DeleteProductUseCase.execute(id);
    setError(error ? error.message : "");
  };

  return {
    error,
    deleteProduct,
    updateProduct,
    getProduct,
    onChange,
    ...productValues,
  };
};

export default ProductDetailViewModel;
