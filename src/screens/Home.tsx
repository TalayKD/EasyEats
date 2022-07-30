import React, {useEffect, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Image, Product} from '../components/';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';


const Home = () => {
  const navigation = useNavigation();
  const {t} = useTranslation()
  const {mainRestaurants} = useData();
  const [products, setProducts] = useState(mainRestaurants);
  const {sizes, icons} = useTheme();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  return (
    <Block>
      {/* search input */}
       <Searchbar
        placeholderTextColor='#666666'
        iconColor='#666666'
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {/* Floating QR Button */}
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
              screen: 'QR',
            })
          }
      >
          <Image style={{width: 35, height: 35}} radius={0} source={icons.qr}/>
      </TouchableOpacity>
      
      {/* products list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          
          {products?.filter(
            (product) => {
              if (searchQuery === "") {
                return true;
              }
              else if (product.title.toUpperCase().includes(searchQuery.toUpperCase().trim().replace(/\s/g, ""))) {
                return true; 
              } else {
                return false;
              }
            }).map((product) => (
              /* Uses the Product component from components/Product.tsx */
              <Product {...product} key={`card-${product?.id}`} />
            ))
          }

        </Block>
      </Block>
    </Block>
  );
};

export default Home;
