import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  useManageFavoriteMutation,
  useStoreProductsQuery
} from 'src/redux/Product/Product.api';
import { AuthStackParams } from 'src/shared/routes/Auth.route';

import { Text } from 'src/components';

import * as S from './Detail.styles';
type NavigationProps = NativeStackScreenProps<AuthStackParams, 'Detail'>;

const Detail = ({ navigation, route }: NavigationProps) => {
  const { data, isFetching } = useStoreProductsQuery({
    id: route.params.idProduct
  });

  const [triggerManageFavorite, { isLoading }] = useManageFavoriteMutation();

  const manageFavorite = async () => {
    await triggerManageFavorite({ productID: route.params.idProduct });
  };

  if (isLoading || isFetching) {
    return (
      <S.ContainerLoading>
        <ActivityIndicator size="large" />
      </S.ContainerLoading>
    );
  }

  return (
    <S.Container>
      <Text textAlign="center" fontSize={18} fontWeight="600">
        {data?.product?.name}
      </Text>

      <Text textAlign="center" fontWeight="500" fontSize={14} marginTop={16}>
        {data?.product?.price}
      </Text>

      <S.ButtonFavorite onPress={manageFavorite}>
        <Text
          marginTop={20}
          color={data?.product.favorite ? '#000000' : '#c72a2a'}
          textAlign="center"
        >
          {data?.product.favorite
            ? 'Remover como Favorito'
            : 'Adicionar como favorito'}
        </Text>
      </S.ButtonFavorite>
    </S.Container>
  );
};
export default Detail;
