import React, {useCallback, useContext, useEffect, useState} from 'react';
import Storage from '@react-native-async-storage/async-storage';

import {
  IBlock,
  ICategory,
  IBranch,
  IRestaurant,
  IOrder,
  IOrderItem,
  IUser,
  IUseData,
  ITheme,
  IMenu,
} from '../constants/types';

import {
  USERS,
  BRANCHES,
  MAIN_RESTAURANTS,
  CATEGORIES,
  ORDER_ITEM,
  MENUS
} from '../constants/mocks';
import {light} from '../constants';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState<ITheme>(light);
  const [user, setUser] = useState<IUser>(USERS[0]);
  const [users, setUsers] = useState<IUser[]>(USERS);
  const [branches, setBranches] = useState<IBranch[]>(BRANCHES);
  const [mainRestaurants, setMainRestaurants] = useState<IRestaurant[]>(MAIN_RESTAURANTS);
  const [menus, setMenus] = useState<IMenu[]>(MENUS);
  const [categories, setCategories] = useState<ICategory[]>(CATEGORIES);
  const [orderItem, setOrderItem] = useState<IOrderItem[]>(ORDER_ITEM);
  const [article, setArticle] = useState<IBlock>({});

  // get isDark mode from storage
  const getIsDark = useCallback(async () => {
    // get preferance gtom storage
    const isDarkJSON = await Storage.getItem('isDark');

    if (isDarkJSON !== null) {
      // set isDark / compare if has updated
      setIsDark(JSON.parse(isDarkJSON));
    }
  }, [setIsDark]);

  // handle isDark mode
  const handleIsDark = useCallback(
    (payload: boolean) => {
      // set isDark / compare if has updated
      setIsDark(payload);
      // save preferance to storage
      Storage.setItem('isDark', JSON.stringify(payload));
    },
    [setIsDark],
  );

  // handle users / profiles
  const handleUsers = useCallback(
    (payload: IUser[]) => {
      // set users / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(users)) {
        setUsers({...users, ...payload});
      }
    },
    [users, setUsers],
  );

  // handle user
  const handleUser = useCallback(
    (payload: IUser) => {
      // set user / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(user)) {
        setUser(payload);
      }
    },
    [user, setUser],
  );

  // handle Article
  const handleArticle = useCallback(
    (payload: IBlock) => {
      // set article / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(article)) {
        setArticle(payload);
      }
    },
    [article, setArticle],
  );

  // get initial data for: isDark & language
  useEffect(() => {
    getIsDark();
  }, [getIsDark]);

  // change theme based on isDark updates
  useEffect(() => {
    setTheme(isDark ? light : light);
  }, [isDark]);

  const contextValue = {
    isDark,
    handleIsDark,
    theme,
    setTheme,
    user,
    users,
    handleUsers,
    handleUser,
    branches,
    setBranches,
    mainRestaurants,
    setMainRestaurants,
    categories,
    setCategories,
    orderItem,
    setOrderItem,
    menus,
    setMenus,
    article,
    handleArticle,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
