import React from "react";

interface ListProps {
  products: Product[],
  onRowClick: (id: number) => void,
}

const List: React.FC<ListProps> = ({ products = [], onRowClick }) => {
  return (
    <div className="p-5">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="flex justify-between p-5 m-2.5 border-black border-[1px] cursor-pointer"
            onClick={() => onRowClick(product.id)}
          >
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        )
      })}
    </div>
  );
}

export default List;
