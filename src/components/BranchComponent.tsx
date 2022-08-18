import React from 'react';
import {TouchableOpacity} from 'react-native';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {IBranch} from '../constants/types';
import {useTheme, useTranslation} from '../hooks';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const BranchComponent = ({branchname: title, location: description, type}: IBranch) => {
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
      
      {/* Everything apart from image */}
      <Block
        paddingVertical={sizes.m}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>

        {/* Title text */}
        <Text p marginTop={sizes.xs}>
          {title}
        </Text>
        <Text p marginTop={sizes.xs}>
          {description}
        </Text>

        {/* Select restaurant (Text and arrow) */}
        <TouchableOpacity 
          onPress = {() => 
            navigation.navigate('Screens', {
              screen: 'Branch'
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
              {t('common.selectBranch')}
            </Text >
            {/* This is the arrow */}
            <Image source={assets.arrow} color={colors.link} /> 
          </Block>
        </TouchableOpacity>
        
      </Block>
    </Block>
  );
};

export default BranchComponent;
