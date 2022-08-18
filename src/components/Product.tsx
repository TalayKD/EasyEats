import React from 'react';
import {TouchableOpacity} from 'react-native';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {IRestaurant} from '../constants/types';
import {useTheme, useTranslation} from '../hooks/';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Product = ({imageurl, restaurantname, type, restaurant_id}: IRestaurant) => {
  const {t} = useTranslation();
  const {assets, colors, sizes} = useTheme();
  const navigation = useNavigation();

  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>

      {/* Image in ALL products (in Home) */}
      <Image
        resizeMode="cover"
        source={{uri: imageurl}}
        style={{
          height: isHorizontal ? 114 : 110,
          width: !isHorizontal ? '100%' : sizes.width / 2.435,
        }}
      />
      
      {/* Everything apart from image */}
      <Block
        paddingVertical={sizes.m}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>

        {/* Title text */}
        <Text p marginTop={sizes.s}>
          {restaurantname}
        </Text>

        {/* Select restaurant (Text and arrow) */}
        <TouchableOpacity 
          onPress = {() => 
            navigation.navigate('Screens', {
              screen: 'Branch',
              params: {selectedRestaurant: restaurant_id},
            })
          }>
          <Block row flex={0} align="center">
            {/* This is the text */}
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}
            >
              {t('common.selectRestaurant')}
            </Text >
            {/* This is the arrow */}
            <Image source={assets.arrow} color={colors.link} /> 
          </Block>
        </TouchableOpacity>
        
      </Block>
    </Block>
  );
};

export default Product;
