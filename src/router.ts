import {createRouter,createWebHashHistory} from "vue-router";
import HomePage from "./views/HomePage.vue";
import ProductEditPage from "./views/ProductEditPage.vue";
const routes = [
  { path: "/", component: HomePage },
  { path: "/edit/:productId", component: ProductEditPage },
];


export default createRouter({
  history: createWebHashHistory(),
  routes, 
});
