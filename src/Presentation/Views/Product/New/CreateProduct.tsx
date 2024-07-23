import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import DI from '../../../../DI/ioc';
interface CreateProductViewModelType {
  name: string,
  price: number,
  onChange: (value: string | number, key: keyof Product ) => void,
  saveProduct: () => void,
}

const CreateProduct: React.FC = () => {
  let navigate = useNavigate();
  const { name, price, onChange, saveProduct } = DI.resolve<CreateProductViewModelType>("CreateProductViewModel");


  return (
    <div className="page">
      <div className="flex items-center justify-between p-2.5">
        <h2>New Product</h2>
        <Button
          title={"Save"}
          onClick={() => {
            saveProduct()
            navigate(-1)
            }}
          />
      </div>
      <div className="flex flex-col p-[30px]">
        <TextInput placeholder="Product Name" autoFocus={true} value={name} onChange={(e: { target: { value: string; }; }) => onChange(e.target.value, "name")} />
        <TextInput placeholder="Product Price" type="number" value={price} onChange={(e: { target: { value: number; }; }) => onChange(e.target.value, "price")} />
      </div>
    </div>
  );
}

export default CreateProduct;
