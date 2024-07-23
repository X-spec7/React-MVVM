import { useState } from "react";

interface CreateProductUseCase<T> {
  execute: (data: Product) => Promise<ApiResponse<T>>;
}

const CreateProductViewModel = ({ CreateProductUseCase }: { CreateProductUseCase: CreateProductUseCase<boolean> }) => {
  const [error, setError] = useState<string>("");
  const [productValues, setProductValues] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
  });

  function onChange(value: any, prop: keyof Product) {
    setProductValues({ ...productValues, [prop]: value});
  }

  async function saveProduct() {
    const { result, error } = await CreateProductUseCase.execute(productValues);
    setError(error ? error.message : "");
  }

  return {
    ...productValues,
    error,
    onChange,
    saveProduct,
  }
}

export default CreateProductViewModel;
