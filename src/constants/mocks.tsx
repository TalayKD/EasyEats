import dayjs from 'dayjs';
import { timezone } from 'expo-localization';
import axios from 'axios';
import {
  IBlock,
  IArticleOptions,
  IBasket,
  ICategory,
  IExtra,
  ILocation,
  INotification,
  IBranch,
  IRestaurant,
  IUser,
  IMenu,
  IOrderItem,
} from './types';
// import { useEffect, useState } from 'react';
// import restaurantApi from './restaurantAPI';
// const { rest } = restaurantApi();
// console.log('rest', rest)

// users
export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Devin Coldewey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80',
  },
  {
    id: 2,
    name: 'Bella Audrey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 3,
    name: 'Miriam Lendra',
    department: 'Desktop Publisher',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 4,
    name: 'David Bishop',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
  {
    id: 5,
    name: 'Mathew Glock',
    department: 'HR Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
  {
    id: 6,
    name: 'Emma Roberts',
    department: 'HR Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
];

export const BRANCHES: IBranch[] = [
  {
    branch_id: '1',
    restaurant_id: '1',
    
    branchname: 'Sukhumvit Branch',
    location: 'Best branch for good food',
    type: 'vertical',
    numTable: 20
  },
  {
    branch_id: '2',
    restaurant_id: '1',
    
    branchname: 'Viphavadhi Branch',
    location: 'Best branch for good view',
    type: 'vertical',
    numTable: 15
  },
  {
    branch_id: '1',
    restaurant_id: '2',
    branchname: 'Bangna Branch',
    location: 'Best branch for good service',
    type: 'vertical',
    numTable: 6
  }
]

// // const [data, setData] = useState([]);

// // const getMovies = async () => {
// //   try {
// //    const response = await fetch('http://localhost:5000/rest');
// //    const json = await response.json();
// //    setData(json);
// //    console.log('data', data);
// //  } catch (error) {
// //    console.error(error);
// //  }
// // }
// // useEffect(() => {
// //   getMovies();
// // }, []);

// // const getRestaurantsFromApi = () => {
// //   return fetch('http://localhost:5000/rest')
// //     .then((response) => {return response.json()})
// //     .catch((error) => {
// //       console.error(error);
// //     });
// // };

// // const fetchData =   return fetch("http://localhost:5000/rest").then((response) => {return response.json()});

// // export function printAddress() {
// //   return fetchData.then((a) => {
// //     console.log('a', temp);
// //     return temp;
// //   });
// // };
// // main restaurants cards

// // const Test = () => {
// //   const [rest, setRest] = useState<IRestaurant[]>([]);
// //   useEffect(()=> {
// //     axios.get("http://localhost:5000/rest").then(res => {setRest(res.data)});
// //   });
// //   console.log("Hi", rest);
// //    return rest;
// //   // main restaurants cards
// // }
// // const MAIN_RESTAURANTS = Test();
// // console.log("hello", MAIN_RESTAURANTS);

// const getMAIN_RESTAURANTS = () => {
  // const [rests, setRests] = useState([])
  // const fetchData = () => {
  //     fetch("https://localhost:5000/rest")
  //     .then(response => {
  //       console.log('hi',response);
  //       return response.json()
  //     })
      // .then(data => {
      //   setRests(data)
      //   console.log('hi', rests)
      // })
  // }
  // fetchData();
  // return rests;
// }

export const MAIN_RESTAURANTS: IRestaurant[] = //rest;
[
  {
    restaurant_id: '1',
    type: 'horizontal',
    restaurantname: 'Hachiban Ramen',
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
  },
  {
    restaurant_id: '2',
    type: 'horizontal',
    restaurantname: 'Yoshinoya',
    imageurl:
      'https://upload.wikimedia.org/wikipedia/id/3/3d/Yoshinoya_logo.jpg',
  },
  {
    restaurant_id: '3',
    type: 'horizontal',
    restaurantname: 'Pepper Lunch',
    imageurl:
      'https://www.centralparkjakarta.com/wp-content/uploads/2017/10/pepper-lunc.jpg',
  },
  {
    restaurant_id: '4',
    type: 'horizontal',
    restaurantname: 'Santa Fé Steak',
    imageurl:
      'https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
  }
];

// categories
export const CATEGORIES: ICategory[] = [
  {id: 1, name: 'Appetizers'},
  {id: 2, name: 'Main Dishes'},
  {id: 3, name: 'Desserts'},
  {id: 4, name: 'Drinks'},
];

// // main restaurants cards
export const MENUS: IMenu[] = [
  {
    menuitem_id: '1',
    type: 'vertical',
    menuitemname: 'Appetizer 1',
    menucategory: CATEGORIES[0],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
    price: 500,
    restaurant_id: '1'
  },
  {
    menuitem_id: '2',
    type: 'vertical',
    menuitemname: 'Appetizer 2',
    menucategory: CATEGORIES[0],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
      //https://upload.wikimedia.org/wikipedia/id/3/3d/Yoshinoya_logo.jpg',
    price: 250,
    restaurant_id: '1'
  },
  {
    menuitem_id: '3',
    type: 'vertical',
    menuitemname: 'Appetizer 3',
    menucategory: CATEGORIES[0],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
      // https://www.centralparkjakarta.com/wp-content/uploads/2017/10/pepper-lunc.jpg',
    price: 20,
    restaurant_id: '1'
  },
  {
    menuitem_id: '4',
    type: 'vertical',
    menuitemname: 'Appetizer 4',
    menucategory: CATEGORIES[0],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
      // https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
    price: 300,
    restaurant_id: '1'
  },
  {
    menuitem_id: '5',
    type: 'vertical',
    menuitemname: 'Appetizer 5',
    menucategory: CATEGORIES[0],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
      // https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
    price: 320,
    restaurant_id: '1'
  },
  {
    menuitem_id: '6',
    type: 'vertical',
    menuitemname: 'Main 1',
    menucategory: CATEGORIES[1],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
      // https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
    price: 370,
    restaurant_id: '1'
  },
  {
    menuitem_id: '7',
    type: 'vertical',
    menuitemname: 'Main 2',
    menucategory: CATEGORIES[1],
    imageurl:
      'https://upload.wikimedia.org/wikipedia/id/3/3d/Yoshinoya_logo.jpg',
      // https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
    price: 100,
    restaurant_id: '2'
  },
  {
    menuitem_id: '8',
    type: 'vertical',
    menuitemname: 'Dessert 1',
    menucategory: CATEGORIES[2],
    imageurl:
      'https://www.centralparkjakarta.com/wp-content/uploads/2017/10/pepper-lunc.jpg',
      // https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
    price: 30,
    restaurant_id: '3'
  },
  {
    menuitem_id: '9',
    type: 'vertical',
    menuitemname: 'Drink 1',
    menucategory: CATEGORIES[3],
    imageurl:
      'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2TGFFWWTKVAC6/hero/e6274f90fec14f85826f4aed91f41f47_1645981740553211506.png',
      // https://article.redprice.co/wp-content/uploads/2017/10/blog.jpg',
    price: 500,
    restaurant_id: '1'
  }
];

// article options
export const ARTICLE_OPTIONS: IArticleOptions[] = [
  {
    id: 1,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    title: 'Cosy apartment',
    description:
      'Different people have different taste, and various types of music have many ways of leaving an impact on someone.',
    type: 'apartment',
    guests: 3,
    sleeping: {total: 2, type: 'bed'},
    price: 200,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1603034203013-d532350372c6?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
];

// offers
// export const OFFERS: IRestaurant[] = [
//   {
//     id: 1,
//     type: 'vertical',
//     title: 'Unique activities with local experts.',
//     image:
//       'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
//   },
//   {
//     id: 2,
//     type: 'vertical',
//     title: 'The highest status people.',
//     image:
//       'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
//   },
//   {
//     id: 3,
//     type: 'vertical',
//     title: 'Get more followers and grow.',
//     image:
//       'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80',
//   },
//   {
//     id: 4,
//     type: 'vertical',
//     title: 'New ways to meet your business goals.',
//     image:
//       'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
//   },
// ];

// rental locations
export const LOCATIONS: ILocation[] = [
  {id: 1, city: 'Paris', country: 'France'},
  {id: 2, city: 'Rome', country: 'Italy'},
  {id: 3, city: 'London', country: 'United Kingdom'},
];

// articles
export const ORDER_ITEM: IOrderItem[] = []
//   {
//     id: 1,
//     foodTitle: 'Food 1',
//     foodQuantity: 2,
//     price: 500,
//   }, 
//   {
//     id: 2,
//     foodTitle: 'Food 2',
//     foodQuantity: 3,
//     price: 250,
//   }, 
//   {
//     id: 3,
//     foodTitle: 'Food 2',
//     foodQuantity: 1,
//     price: 20,
//   },
// ];

// chat messages
export const MESSSAGES = [
  {
    _id: 1,
    text: 'Bye, bye 👋🏻',
    createdAt: dayjs().subtract(1, 'm').toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 2,
    text: 'Ok. Cool! See you 😁',
    createdAt: dayjs().subtract(2, 'm').toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
  {
    _id: 3,
    text: 'Sure, just let me finish somerhing and I’ll call you.',
    createdAt: dayjs().subtract(3, 'm').toDate(),
    user: {
      _id: USERS[0].id,
      name: USERS[0].name,
      avatar: USERS[0].avatar,
    },
  },
  {
    _id: 4,
    text: 'Hey there! How are you today? Can we meet and talk about location? Thanks!',
    createdAt: dayjs().subtract(4, 'm').toDate(),
    user: {
      _id: USERS[1].id,
      name: USERS[1].name,
      avatar: USERS[1].avatar,
    },
  },
];

// extras cards
export const EXTRAS: IExtra[] = [
  {
    id: 1,
    name: 'BMW X5',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/x5.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 2,
    name: 'Tesla',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/tesla.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 3,
    name: 'Mercedes GLE',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/gle.png'),
    saved: false,
    booked: false,
    available: false,
  },
];

// shopping basket recommentations
export const BASKET_RECOMMENDATIONS: IBasket['items'] = [
  {
    id: 4,
    title: 'Polo T-Shirt',
    description: 'Impeccably tailored in Italy.',
    image:
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?fit=crop&w=450&q=80',
    stock: true,
    qty: 1,
    size: 'M',
    price: 200,
  },
  {
    id: 5,
    title: 'Orange Jacket',
    description: 'Mustard About Me - South Africa',
    image:
      'https://images.unsplash.com/photo-1599407950360-8b8642d423dc?fit=crop&w=450&q=80',
    stock: true,
    qty: 1,
    size: 'M',
    price: 489,
  },
];

// shopping basket
export const BASKET: IBasket = {
  subtotal: 750,
  recommendations: BASKET_RECOMMENDATIONS,
  items: [
    {
      id: 1,
      title: 'Leather Jacket',
      description: 'Impeccably tailored in Italy from lightweight navy.',
      image:
        'https://images.unsplash.com/photo-1562751361-ac86e0a245d1?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'M',
      price: 250,
      qtys: [1, 2, 3, 4, 5],
      sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    {
      id: 2,
      title: 'Dark T-Shirt',
      description: 'Dark-grey slub wool, pintucked notch lapels.',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'l',
      price: 150,
      qtys: [1, 2, 3, 4, 5],
      sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    {
      id: 3,
      title: 'Leather Handbag',
      description: "Immaculate tailoring is TOM FORD's forte",
      image:
        'https://images.unsplash.com/photo-1608060434411-0c3fa9049e7b?fit=crop&w=450&q=80',
      stock: true,
      qty: 1,
      size: 'm',
      price: 350,
      qtys: [1, 2, 3],
      sizes: ['s', 'm', 'l'],
    },
  ],
};

// notifications
export const NOTIFICATIONS: INotification[] = [
  {
    id: 1,
    subject: 'New Message',
    message: 'You have a new message from the owner.',
    type: 'document',
    business: true,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 2,
    subject: 'New Order',
    message: 'A confirmed request by one client.',
    type: 'extras',
    business: true,
    read: false,
    createdAt: dayjs().subtract(4, 'h').toDate(),
  },
  {
    id: 3,
    subject: 'New Likes',
    message: 'Your posts have been liked by 2,342.',
    type: 'notification',
    business: true,
    read: true,
    createdAt: dayjs().subtract(6, 'h').toDate(),
  },
  {
    id: 4,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
  {
    id: 5,
    subject: 'Check your profile',
    message: 'Your profile has new updates.',
    type: 'profile',
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, 'd').toDate(),
  },
  {
    id: 6,
    subject: 'Product Update',
    message: 'Your product has been updated',
    type: 'documentation',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'w').toDate(),
  },
  {
    id: 7,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(3, 'w').toDate(),
  },
  {
    id: 8,
    subject: 'Learn new things',
    message:
      'Like so many organizations these days, Autodesk is a company in transition. It was until recently.',
    type: 'document',
    business: false,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 9,
    subject: 'Give your best',
    message:
      'The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color.',
    type: 'payment',
    business: false,
    read: false,
    createdAt: dayjs().subtract(9, 'h').toDate(),
  },
  {
    id: 10,
    subject: 'Come and meet us',
    message:
      'Technology is applied science. Science is the study of nature. Mathematics is the language of nature.',
    type: 'office',
    business: false,
    read: false,
    createdAt: dayjs().subtract(12, 'h').toDate(),
  },
];

export default {
  USERS,
  BRANCHES,
  MAIN_RESTAURANTS,
  CATEGORIES,
  ORDER_ITEM,
  MESSSAGES,
  EXTRAS,
  NOTIFICATIONS,
  MENUS
};
