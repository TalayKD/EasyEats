import i18n from 'i18n-js';
import {ImageSourcePropType} from 'react-native';
import {ITheme} from './theme';
import Moment from 'moment';

export * from './components';
export * from './theme';

export interface IUser {
  id: number | string;
  name?: string;
  department?: string;
  avatar?: string;
  stats?: {posts?: number; followers?: number; following?: number};
  social?: {twitter?: string; dribbble?: string};
  about?: string;
}

export interface ICategory {
  id?: number;
  name?: string;
}
export interface IArticleOptions {
  id?: number;
  title?: string;
  description?: string;
  type?: 'room' | 'apartment' | 'house'; // private room | entire apartment | entire house
  sleeping?: {total?: number; type?: 'sofa' | 'bed'};
  guests?: number;
  price?: number;
  user?: IUser;
  image?: string;
}
export interface IBlock {
  id?: number;
  foodQuantity?: number;
  foodTitle?: string;
  linkLabel?: string;
  price?: number;
  onPress?: (event?: any) => void;
}

export interface IBranch {
  branch_id?: string;
  branchname?: string;
  restaurant_id: string;
  location?: string;
  numTable?: number;
  type: 'vertical' | 'horizontal';
}

export interface IRestaurant {
  restaurant_id: string;
  restaurantname: string;
  cuisinetype?: string;
  imageurl: string;
  type: 'vertical' | 'horizontal';
}
export interface IMenu {
  menuitem_id: string;
  menucategory?: ICategory;
  restaurant_id: string;
  menuitemname?: string;
  customizable?: string;
  imageurl?: string;
  description?: string;
  available?: boolean;
  type: 'vertical' | 'horizontal';
  
  price?: number;
}
export interface ILocation {
  id?: number;
  city?: string;
  country?: string;
}

// PANN: TODO, update this to match w DBeaver
export interface IOrder {
  branch_id: string;
  tablenumber: number;
  ordertime: string;
  ordercomplete: boolean;
}

// PANN: TODO, update this to match w DBeaver
export interface IOrderItem {
  branch_id: string;
  menuitem_id: string;
  foodTitle: string;
  quantity: number;
  delivered: boolean;
  customizabletext: string;
  price: number;
}

export interface IUseData {
  isDark: boolean;
  handleIsDark: (isDark?: boolean) => void;
  theme: ITheme;
  setTheme: (theme?: ITheme) => void;
  user: IUser;
  users: IUser[];
  handleUser: (data?: IUser) => void;
  handleUsers: (data?: IUser[]) => void;
  basket: IBasket;
  handleBasket: (data?: IBasket) => void;
  branches: IBranch[];
  setBranches: (data?: IBranch[]) => void;
  mainRestaurants: IRestaurant[];
  order: IOrder[];
  orderItem: IOrderItem[];
  setMainRestaurants: (data?: IRestaurant[]) => void;
  categories: ICategory[];
  setCategories: (data?: ICategory[]) => void;
  recommendations: IBlock[];
  setRecommendations: (data?: IBlock[]) => void;
  articles: IBlock[];
  setArticles: (data?: IBlock[]) => void;
  menus: IMenu[];
  setMenus: (data?: IMenu[]) => void;
  article: IBlock;
  handleArticle: (data?: IBlock) => void;
  notifications: INotification[];
  handleNotifications: (data?: INotification[]) => void;
}

export interface ITranslate {
  locale: string;
  setLocale: (locale?: string) => void;
  t: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
  translate: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
}
export interface IExtra {
  id?: number;
  name?: string;
  time?: string;
  image: ImageSourcePropType;
  saved?: boolean;
  booked?: boolean;
  available?: boolean;
  onBook?: () => void;
  onSave?: () => void;
  onTimeSelect?: (id?: number) => void;
}

export interface IBasketItem {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  stock?: boolean;
  price?: number;
  qty?: number;
  qtys?: number[];
  size?: number | string;
  sizes?: number[] | string[];
}

export interface IBasket {
  subtotal?: number;
  items?: IBasketItem[];
  recommendations?: IBasketItem[];
}

export interface INotification {
  id?: number;
  subject?: string;
  message?: string;
  read?: boolean;
  business?: boolean;
  createdAt?: number | Date;
  type:
    | 'document'
    | 'documentation'
    | 'payment'
    | 'notification'
    | 'profile'
    | 'extras'
    | 'office';
}
