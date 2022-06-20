import { ref } from "vue";
import IProduct from '@/types/Product'
const products = ref<IProduct[]>([
  {id:1,name:'Macbook Air M1',categoryId:1,price:1200,quantity:25},
  {id:2,name:'Iphone 12 Mini',categoryId:2,price:1000,quantity:15},
  {id:3,name:'Macbook Pro M2',categoryId:1,price:2000,quantity:10}
])
export default function  useProducts() {
  
  const updateProduct = (updatedProduct:IProduct):void=>{
    const index = products.value.findIndex((product)=>product.id===updatedProduct.id)
    products.value[index] = updatedProduct
  }

  const addProduct = (newProduct:IProduct):void=>{
    if(newProduct){
      products.value.push(newProduct)
    }
  }

  const getProductById = (productId:number): object =>({
   ...products.value.find((product)=>product.id===productId)
  })
  return { products,updateProduct,addProduct,getProductById};
}
