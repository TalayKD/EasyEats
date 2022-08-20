import React, {useCallback, useEffect, useRef, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks';
import {Block, Button, Image, Input, Product, Text, Order, OrderItem, Article} from '../components';
import { TouchableOpacity, TextInput, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ICONS } from '../constants/theme';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { IBlock, IOrderItem } from '../constants/types';

const Customizable = ({ route } : {route: any}) => {
  const {basket, oldCustomizableText, oldQuantity, update, foodTitle, delivered, selectedRestaurant, selectedBranch, menuitem_id, price, tableNumber} = route.params;
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();
  var quantity = 1;
  var initialText = '';
  var textInput =       
  <TextInput style={{backgroundColor:colors.card,
    borderColor: colors.gray, 
    borderWidth:1, 
    borderRadius: 8, 
    paddingVertical:10, 
    paddingHorizontal: 8,
    fontSize: 16}} 
    onChangeText={newText => setText(newText)}
    placeholder="Customize your dish" multiline 
  />
  if (update) {
    quantity = oldQuantity
    initialText = oldCustomizableText
      textInput =  <TextInput style={{backgroundColor:colors.card,
      borderColor: colors.gray, 
      borderWidth:1, 
      borderRadius: 8, 
      paddingVertical:10, 
      paddingHorizontal: 8,
      fontSize: 16}} 
      onChangeText={newText => setText(newText)}
      defaultValue={oldCustomizableText}
      editable={true}
    />  
  }
  const [text, setText] = useState(initialText);
  const {orderItem} = useData()
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);

  
  const [count, setCount] = useState(quantity)
  const [currOrderItem, setCurrOrderItem] = useState(basket)
  const [load, setLoad] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');let newState: React.SetStateAction<IOrderItem[]> = [];


  useEffect(()=>{
    console.log('currOrderItem', currOrderItem)
    if (load) {
      navigation.navigate('Screens', {
        screen: 'MenuPage',
        params: {basket: currOrderItem}
      });
  }
  }, [load])

  var placeOrderText = "Add to Order"
  if (update) {
    placeOrderText = "Update Order"
  }

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const increase = () => {
    setCount(count => count + 1);
  };

  const decrease = () => {
    if(count > 0){
      setCount(count => count - 1);
    }
    
  }

  const onPressOrder = () => {
    if (update) {
      if (count == 0) {
        console.log('selectedMenuItem',menuitem_id)
        let newCurrOrderItem = currOrderItem.filter((item: { menuitem_id: number; })=> item.menuitem_id != menuitem_id)
        console.log('newCurrOrderItem', newCurrOrderItem)
        setCurrOrderItem(newCurrOrderItem)
        console.log('test success')
      }
      else {
        var newCurrOrderItem = [...currOrderItem]
        for (let i = 0; i < currOrderItem.length; i++) {
            if (newCurrOrderItem[i].menuitem_id === menuitem_id) {
              newCurrOrderItem[i].quantity = count;
              newCurrOrderItem[i].customizabletext = text;
              setCurrOrderItem(newCurrOrderItem)
            }
        }
        console.log("ERROR, Customizable.tsx")
      }
    } else {
      if (count != 0) { 
        let newOrderItem : IOrderItem = {
        foodTitle: foodTitle,
        branch_id: selectedRestaurant,
        menuitem_id: menuitem_id,
        quantity: count,
        delivered: false,
        customizabletext: text,
        price: price
        }
        setCurrOrderItem((currOrderItem: any)=>[...currOrderItem, newOrderItem]);
      }
    }
    setLoad(true);
  }
  

  
  
  return (
    <TouchableOpacity
      activeOpacity={1.0}
      style={{flex:1, paddingTop:sizes.s, }}
      onPress={()=>Keyboard.dismiss()}
    >
      {/* <Text>Selected Branch: {selectedBranch} Selected Restaurant: {selectedRestaurant} 
            Selected Menu Item: {menuitem_id} Table Number: {tableNumber} update:{update}</Text> */}
      <View style={{flex: 1, paddingHorizontal:sizes.padding}}>
        <View style={{paddingVertical:10}}>
          <Text h5 style={{ paddingVertical:10, 
                            paddingHorizontal: 8,}}>
            The restaurant would give you options here on how to customize your food.
          </Text>
        </View>
        <View >
          {textInput}
        </View>
      </View>
      <View style={{backgroundColor:'white', borderRadius:20, flex: 0.3, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button color='#47B9B6' onPress={decrease}>
            <Text h4 bold color='white'>
              -
            </Text>
          </Button>
          <Button color='#EBF1F7'>
            <Text p bold>
              {count}
            </Text>
          </Button>
          <Button color='#47B9B6' onPress={increase}>
            <Text h4 bold color='white'>
              +
            </Text>
          </Button>
        </View>
        <View>
          <Button 
              color='#FC585D' 
              marginVertical={sizes.m} 
              rounded={true} 
              height={30} width={300}
              onPress = {onPressOrder}
          >
                
                  <Text white bold transform="uppercase">
                    {placeOrderText}
                  </Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
          
};


export default Customizable;
