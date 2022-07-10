import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, BranchComponent, Modal, Text} from '../components/';
import { useNavigation } from '@react-navigation/native';

const Branch = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {branches} = useData();
  const [products, setProducts] = useState(branches);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  

  /* initializing variables for branch drop-down menu */
  const branchObj = products;
  const [showModal, setModal] = useState(false);
  const [branchAt, setBranch] = useState(branchObj[0]);

  const [showModalTable, setModalTable] = useState(false);
  const [tableAt, setTable] = useState(1);

  return (
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1, paddingBottom: sizes.m}}>
          <Block>
            <Text h5 marginTop={sizes.m}>
              Choose a branch for this restaurant
            </Text>
            <Button
                flex={0.25}
                row
                gradient={gradients.dark}
                onPress={() => setModal(true)}>
                <Block
                  row
                  align="center"
                  justify="space-between"
                  paddingHorizontal={sizes.sm}>
                  <Text white bold transform="uppercase" marginRight={sizes.sm}>
                    {branchAt.title}
                  </Text>
                  <Image
                    source={assets.arrow}
                    color={colors.white}
                    transform={[{rotate: '90deg'}]}
                  />
                </Block>
            </Button>

            {/* table input number */}
            <Text h5 marginTop={sizes.m}>
              Input your table number
            </Text>
            <Button
                flex={0.25}
                row
                gradient={gradients.dark}
                onPress={() => setModalTable(true)}>
                <Block
                  row
                  align="center"
                  justify="space-between"
                  paddingHorizontal={sizes.sm}>
                  <Text white bold transform="uppercase" marginRight={sizes.sm}>
                    {tableAt}
                  </Text>
                  <Image
                    source={assets.arrow}
                    color={colors.white}
                    transform={[{rotate: '90deg'}]}
                  />
                </Block>
            </Button>
          </Block>
          <Block style={{justifyContent: 'flex-end', alignItems: 'center'}}>
            <Button 
            onPress={() => navigation.navigate('Screens', {screen: 'MenuPage'})}
            gradient={gradients.success} 
            marginVertical={sizes.s} 
            rounded={true} 
            height={30} width={300}>
                <Text white bold transform="uppercase">
                  Next
                </Text>
            </Button>
          </Block> 
          <Modal visible={showModal} onRequestClose={() => setModal(false)}>
              <FlatList
                data={branchObj}
                renderItem={({item}) => (
                  <Button
                    marginBottom={sizes.sm}
                    onPress={() => {
                      setBranch(item);
                      setModal(false);
                    }}>
                    <Text p white semibold transform="uppercase">
                      {item.title}
                    </Text>
                  </Button>
                )}
              />
          </Modal>
          <Modal visible={showModalTable} onRequestClose={() => setModalTable(false)}>
              <FlatList
                keyExtractor={(index) => `${index}`}
                data={Array.from(Array(branchAt.numTable).keys()).map(x => x+1)}
                renderItem={({item}) => (
                  <Button
                    marginBottom={sizes.sm}
                    onPress={() => {
                      setTable(item);
                      setModalTable(false);
                    }}>
                    <Text p white semibold transform="uppercase">
                      {item}
                    </Text>
                  </Button>
                )}
              />
          </Modal>
      </Block>
  );
};

export default Branch;
