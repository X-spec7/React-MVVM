import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import List from "../../../components/List";
import Button from "../../../components/Button";
import DI from '../../../../DI/ioc';

interface ProductListViewModelType {
  products: Product[];
  getProducts: () => void;
}
interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  let navigate = useNavigate();
  const { products, getProducts } = DI.resolve<ProductListViewModelType>("ProductListViewModel");

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="page">
      <div className="flex items-center justify-between p-2.5">
        <h2>Product List</h2>
        <Button title={"New"} onClick={() => navigate(`/product/new`)} />
      </div>
      <List products={products} onRowClick={(id: number) => navigate(`/product/detail/${id}`)} />
    </div>
  );
}

export default ProductList;
