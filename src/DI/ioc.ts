import { createContainer, asFunction, asValue, AwilixContainer } from 'awilix';
import { ProductRepository } from '../Data/Repository/ProductRepository';
import * as ProductLocalStorageDataSource from '../Data/DataSource/ProductLocalStorageDataSource';

const container: AwilixContainer = createContainer();

container.register({
  ProductRepository: asFunction(ProductRepository).singleton(),
  ProductDataSource: asValue(ProductLocalStorageDataSource),
});

export default container;
