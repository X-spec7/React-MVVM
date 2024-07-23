import { createContainer, asFunction, asValue, AwilixContainer } from 'awilix';
import { ProductRepository } from '../Data/Repository/ProductRepository';
import * as ProductLocalStorageDataSource from '../Data/DataSource/ProductLocalStorageDataSource';
import { CreateProductUseCase } from '../Domain/UseCase/Product/CreateProduct';
import { DeleteProductUseCase } from '../Domain/UseCase/Product/DeleteProduct';
import { GetAllProductUseCase } from '../Domain/UseCase/Product/getAllProduct';
import { GetProductByIdUseCase } from '../Domain/UseCase/Product/GetProductById';
import { UpdateProductUseCase } from '../Domain/UseCase/Product/UpdateProduct';
import ProductListViewModel from '../Presentation/Views/Product/List/ProductListViewModel';
import ProductDetailViewModel from '../Presentation/Views/Product/Detail/ProductDetailViewModel';
import CreateProductViewModel from '../Presentation/Views/Product/New/CreateProductViewModel';

const container: AwilixContainer = createContainer();

container.register({
  ProductRepository: asFunction(ProductRepository).singleton(),
  ProductDataSource: asValue(ProductLocalStorageDataSource),
  
  // Use cases
  GetProductByIdUseCase: asFunction(GetProductByIdUseCase),
  UpdateProductUseCase: asFunction(UpdateProductUseCase),
  DeleteProductUseCase: asFunction(DeleteProductUseCase),
  GetAllProductUseCase: asFunction(GetAllProductUseCase),
  CreateProductUseCase: asFunction(CreateProductUseCase),

  // View models
  ProductDetailViewModel: asFunction(ProductDetailViewModel),
  ProductListViewModel: asFunction(ProductListViewModel),
  ProductNewViewModel: asFunction(CreateProductViewModel),
});

export default container;