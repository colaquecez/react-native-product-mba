import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useGetAllFavoritesQuery } from 'src/redux/Product/Product.api';
import * as S from './Favorite.styles';
import { Text, View } from 'src/components';
import { IProductsResponse } from 'src/redux/Product/Product.types';

const Favorite = ({ navigation }) => {
  const { isFetching, data } = useGetAllFavoritesQuery();

  const renderItem = ({ item }: { item: IProductsResponse }) => {
    return (
      <S.Container
        onPress={() =>
          navigation.navigate('Detail', {
            idProduct: item._id
          })
        }
      >
        <Text>{item.name}</Text>
        <Text marginTop={16} fontSize={14} textAlign="center">
          {item.price}
        </Text>
      </S.Container>
    );
  };

  if (isFetching) {
    return (
      <S.ContainerLoading>
        <ActivityIndicator size="large" />
      </S.ContainerLoading>
    );
  }

  if (data?.products.length === 0) {
    return (
      <Text marginTop={16} fontWeight="500" textAlign="center">
        Você não possui nenhum favorito
      </Text>
    );
  }

  return (
    <FlatList
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
  );
};

export default Favorite;
