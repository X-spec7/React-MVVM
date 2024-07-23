import { ProductRepository } from '../../../src/Data/Repository/ProductRepository';
import 'regenerator-runtime/runtime';

// Mock ProductDataSource
const mockProductDataSource: ProductDataSourceInterface = {
  create: jest.fn(),
  deleteProduct: jest.fn(),
  update: jest.fn(),
  getAll: jest.fn(),
  getOne: jest.fn()
};

const inputData: Partial<Product> = { name: 'Example Product', price: 9.99 };
const id: number = 123;
const successResult: ApiResponse<any> = { result: 'success', error: null };
const errorResult = (errorMsg: string): ApiResponse<null> => ({ result: null, error: new Error(errorMsg) });

describe('ProductRepository', () => {
  let productRepository: ProductRepositoryInterface;

  beforeEach(() => {
    // Create a new instance of ProductRepository with the mock ProductDataSource
    productRepository = ProductRepository({ProductDataSource: mockProductDataSource});
  });

  afterEach(() => {
    // Reset mock after each test
    jest.clearAllMocks();
  });

  interface TestCase {
    methodName: keyof ProductRepositoryInterface;
    action: keyof typeof mockProductDataSource;
    params: any[];
    successResult: ApiResponse<any>;
    errorMsg: string;
  }

  const testCases: TestCase[] = [
    {
      methodName: 'createProduct',
      action: 'create',
      params: [inputData],
      successResult,
      errorMsg: 'Failed to create product'
    },
    {
      methodName: 'deleteProduct',
      action: 'deleteProduct',
      params: [id],
      successResult,
      errorMsg: 'Failed to delete product'
    },
    {
      methodName: 'updateProduct',
      action: 'update',
      params: [id, inputData],
      successResult,
      errorMsg: 'Failed to update product'
    },
    {
      methodName: 'getProducts',
      action: 'getAll',
      params: [],
      successResult,
      errorMsg: 'Failed to get all products'
    },
    {
      methodName: 'getProduct',
      action: 'getOne',
      params: [id],
      successResult,
      errorMsg: 'Failed to get product'
    }
  ];

  testCases.forEach(({ methodName, action, params, successResult, errorMsg }) => {
    describe(methodName as string, () => {
      it(`should ${action} and return the result`, async () => {
        // Mock
        (mockProductDataSource[action] as jest.Mock).mockResolvedValue(successResult);

        // Act
        const result = await (productRepository[methodName] as any)(...params);

        // Assert
        expect(mockProductDataSource[action]).toHaveBeenCalledWith(...params);
        expect(result).toEqual(successResult);
      });

      it(`should handle errors during ${action} and return the error`, async () => {
        // Mock
        const expectedResult = errorResult(errorMsg);
        (mockProductDataSource[action] as jest.Mock).mockResolvedValue(expectedResult);

        // Act
        const result = await (productRepository[methodName] as any)(...params);

        // Assert
        expect(mockProductDataSource[action]).toHaveBeenCalledWith(...params);
        expect(result).toEqual(expectedResult);
      });
    });
  });
});