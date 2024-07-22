
declare global {
  interface Product {
    id: number;
    name: string;
    price: number;
  };

  interface ApiResponse<T> {
    error: Error | null;
    result: T | null;
  }

};

export {};
