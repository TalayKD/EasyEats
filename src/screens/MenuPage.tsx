import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useData, useTheme} from '../hooks';
import {ICategory, IMenu} from '../constants/types';
import {Block, Button, Article, Text, Menu, Image} from '../components';
import {useNavigation} from '@react-navigation/core';
import { useLinkProps } from '@react-navigation/native';

const MenuPage = ( { route } : {route: any}) => {
  const navigation = useNavigation();
  const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [menus, setMenus] = useState<IMenu[]>([]);
  const {colors, gradients, sizes, icons} = useTheme();
  const {selectedRestaurant, selectedBranch, tableNumber, basket} = route.params;
  console.log('menupage', basket)
  const restaurantData = data.menus.filter((menu)=>{
    return menu.restaurant_id === selectedRestaurant
  })

  var amountInCart = 0
  for (let i = 0; i < basket.length; i++) {
    amountInCart += basket[i].quantity
  }
  console.log('amountInCart', amountInCart)
  var cartNotification = <Text></Text>
  if (amountInCart != 0) {
    cartNotification = 
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: 'rgba(0,0,0,10)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 30,
          position: 'absolute',
          bottom: 80,
          right: 50,
          height: 30,
          backgroundColor: '#FC585D',
          borderRadius: 100,
          zIndex: 2
        }}
      >
        <Text bold p color='white'>{amountInCart}</Text>
      </TouchableOpacity>
  }
  // init articles
  useEffect(() => {
    // THIS sets what articles (specific text and image) it displays
    setMenus(restaurantData);
    setCategories(data?.categories);
    setSelected(data?.categories[0]);
  }, [data.menus, data.categories]);

  // update articles on category change
  useEffect(() => {
    const category = data?.categories?.find(
      (category) => category?.id === selected?.id,
    );

    const newMenus = restaurantData.filter(
      (menu) => menu?.menucategory?.id === category?.id,
    );

    setMenus(newMenus);
  }, [data, selected, setMenus]);
  return (
    
    <Block>
      {/* Pann TODO : Remove Test */}
      {/* <Text>Branch: {selectedBranch} Restaurant: {selectedRestaurant} TableNumber: {tableNumber} </Text> */}

      {/* Floating Cart Button */}
      <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,10)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 30,
            right: 10,
            height: 70,
            backgroundColor: '#fff',
            borderRadius: 100,
            zIndex: 2,
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 2, width: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 1.2,
            elevation: 2,
          }}
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'Cart',
              params: {currOrderItem: basket}
            })
          }
      >
          <Image style={{width:60, height:60, right: 2}} source={icons.cart}/>
      </TouchableOpacity>

      {/* categories list */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
          {categories?.map((category) => {
            const isSelected = category?.id === selected?.id;
            return (
              <Button
                shadow = {false}
                radius={sizes.m}
                marginHorizontal={sizes.s}
                key={`category-${category?.id}}`}
                onPress={() => setSelected(category)}
                color={isSelected ? '#FC585D' : '#D5E6F0'}>
                <Text
                  p
                  bold={isSelected}
                  white={isSelected}
                  black={!isSelected}
                  transform="capitalize"
                  marginHorizontal={sizes.m}>
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>

      {/* All the menus */}
      <FlatList
        data={menus}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => `${item?.menuitem_id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => 
          <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
            <Menu selectedBranch={selectedBranch} selectedRestaurant={selectedRestaurant} imageurl={item.imageurl} 
            price={item.price} menuitemname={item.menuitemname} type={item.type} description={item.description} 
            menuitem_id={item.menuitem_id} tableNumber={tableNumber} basket={basket}/>
          </Block>
        }
      />
      {cartNotification}
    </Block>

    

  );
};

export default MenuPage;
