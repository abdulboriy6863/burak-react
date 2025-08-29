/** REACT APP STATE **/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  productsPage: any;
  homePage: HomePageState;
  productPage: ProductsPageState;
}

/** HOMEPAGE**/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCT PAGE**/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE**/
