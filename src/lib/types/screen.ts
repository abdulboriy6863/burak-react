/** REACT APP STATE **/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE**/
export interface HomePageState {
  popularDishes: Product[];
  newDished: Product[];
  topUsers: Member[];
}

/** PRODUCT PAGE**/
/** ORDERS PAGE**/
