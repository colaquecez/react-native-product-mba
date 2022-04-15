import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { useGetAllQuery } from 'src/redux/Product/Product.api';
import { IProductsResponse } from 'src/redux/Product/Product.types';
import { AuthStackParams } from 'src/shared/routes/Auth.route';
import { Text } from 'src/components';
import * as S from './Products.styles';
import { useDispatch } from 'react-redux';
import { logoutAction } from 'src/redux/Auth/Auth.slice';

type NavigationProps = NativeStackScreenProps<AuthStackParams, 'Detail'>;

const Products = ({ navigation }: NavigationProps) => {
  const [page, setPage] = useState(1);
  const loading = true;
  const { isFetching, data } = useGetAllQuery({
    orderDirection: 'asc',
    page,
    perPage: 40
  });

  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(logoutAction());
  };

  const formatFavoriteMessage = (isFavorite: boolean) => {
    return isFavorite ? 'Produto Favorito ♥' : 'Produto não é Favorito ♡';
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={logoutHandle}>
            <Text color="red" marginRight={16}>
              Logout
            </Text>
          </TouchableOpacity>
        );
      }
    });
  });

  const renderItem = ({ item }: { item: IProductsResponse }) => {
    return (
      <S.Container
        onPress={() =>
          navigation.navigate('Detail', {
            idProduct: item._id
          })
        }
      >
        <S.Text>{item.name}</S.Text>
        <Text marginTop={16} fontSize={14} textAlign="center">
          {item.price}
        </Text>
        <Text fontSize={11} textAlign="center" marginTop={16}>
          {formatFavoriteMessage(item.favorite)}
        </Text>
      </S.Container>
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          isFetching ? <ActivityIndicator size="large" /> : null
        }
        data={data?.products}
        numColumns={2}
        style={{ paddingVertical: 5 }}
        columnWrapperStyle={{
          flex: 1,
          marginBottom: 8,
          marginHorizontal: 10,
          justifyContent: 'space-between'
        }}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Products;
