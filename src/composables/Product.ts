import { ref } from "vue";
import IProduct from "@/types/Product";
import { Storage } from "@/Storage/Storage";

const products = ref<IProduct[]>(
  Storage.prototype.getDataFromStorageByKey("products")
);
export default function useProducts() {
  const updateProduct = (updatedProduct: IProduct): void => {
    const index = products.value.findIndex(
      (product) => product.id === updatedProduct.id
    );
    products.value[index] = updatedProduct;
    saveProductsToStorage();
  };

  const addProduct = (newProduct: IProduct): void => {
    if (newProduct) {
      products.value.push(newProduct);
    }
    saveProductsToStorage();
  };

  const getProductById = (productId: number): object => ({
    ...products.value.find((product) => product.id === productId),
  });

  const removeProductById = (productId: number): void => {
    const index = products.value.findIndex(
      (product) => product.id === productId
    );
    products.value.splice(index, 1);
    saveProductsToStorage();
  };

  const saveProductsToStorage = (): void => {
    Storage.prototype.setDataByKey<IProduct[]>("products", products.value);
  };
  return {
    products,
    updateProduct,
    addProduct,
    getProductById,
    removeProductById,
    saveProductsToStorage,
  };
}
