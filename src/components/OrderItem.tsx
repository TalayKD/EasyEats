import React from 'react';
import dayjs from 'dayjs';
import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

import Text from './Text';
import Block from './Block';
import {useTheme, useTranslation} from '../hooks';
import {IBlock} from '../constants/types';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

// import React from 'react';

// const OrderItem = (props: any) => {
//   const { branch_id, menuitem_id, quantity, customizabletext } = props;
//   let delivered = false;
// }
// export default OrderItem
// {
//   foodTitle,
//   onPress,
//   linkLabel,
//   foodQuantity,
//   price,
// }: IBlock

const OrderItem = (props:any) => {
  const { foodTitle, price, branch_id, menuitem_id, quantity, customizabletext, basket } = props;
  console.log('foodTitle', foodTitle)
  const {t} = useTranslation();
  const {colors, gradients, icons, sizes} = useTheme();
  const navigation = useNavigation();

    return (
      <TouchableWithoutFeedback>
        <Block card marginTop={sizes.sm} style={{flexDirection:'row'}}>
            <View style={{flex: 1, justifyContent:'center'}}>
              <View style={{backgroundColor: '#FC585D', height: 45, width: 45, borderRadius: 5, alignItems: 'center', justifyContent:'center'}}>
                <Text white bold>
                  x{quantity}
                </Text>
              </View>
            </View>
            <View style={{paddingVertical: 10, flex: 5, flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flex: 3, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
              {foodTitle && (
                <Text
                  style={{flex:100}}
                  p bold>
                  {foodTitle}
                </Text>
              )}

            {/* food price */
            console.log('price', price)}
            {price && (
            <Text>
              ฿{price.toString()}
            </Text>
          )}
            </View>
              {/* Edit button */}
          <TouchableOpacity style={{ alignSelf:'flex-start', paddingHorizontal:10}}
          onPress = {() => 
            navigation.navigate('Screens', {
            screen: 'Customizable',
            params: { update: true, oldCustomizableText: customizabletext, oldQuantity: quantity, menuitem_id: menuitem_id, basket: basket }
          })}>
            {/* This is the text */}
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              style={{alignSelf: 'flex-end'}}
              marginRight={sizes.sm}
            >
              {t('common.edit')}
            </Text >
          </TouchableOpacity>
            </View>

          
          
          
        </Block>
      </TouchableWithoutFeedback>
    );
  }

export default OrderItem;
