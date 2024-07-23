import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import DI from '../../../../DI/ioc';

interface ProductDetailViewModelType {
  name: string;
  price: number;
  getProduct: (id: string) => void;
  onChange: (value: string, prop: "name" | "price") => void;
  updateProduct: (id: string) => void;
  deleteProduct: (id: string) => void;
}

const ProductDetail: React.FC = () => {
  let navigate = useNavigate();
  let { id } = useParams<{ id: string }>();

  const viewModel = DI.resolve<ProductDetailViewModelType>("ProductDetailViewModel");

  useEffect(() => {
    if (id) {
      viewModel.getProduct(id);
    }
  }, [id, viewModel]);

  return (
    <div className="page">
      <div className="flex items-center justify-between p-2.5">
        <h2>Edit Product</h2>
        <div className="flex">
          <Button
            title="Delete"
            onClick={() => {
              if (id) {
                viewModel.deleteProduct(id);
                navigate(-1);
              }
            }}
          />
          <Button
            title="Update"
            onClick={() => {
              if (id) {
                viewModel.updateProduct(id);
                navigate(-1);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col p-7.5">
        <TextInput
          placeholder="Product Name"
          autoFocus={true}
          value={viewModel.name}
          onChange={(e: { target: { value: string; }; }) => viewModel.onChange(e.target.value, "name")}
        />
        <TextInput
          placeholder="Product Price"
          type="number"
          value={viewModel.price.toString()}
          onChange={(e: { target: { value: string; }; }) => viewModel.onChange(e.target.value, "price")}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
