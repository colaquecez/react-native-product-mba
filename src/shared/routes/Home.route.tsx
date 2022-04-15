import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAppSelector from 'src/hooks/useSelector';
import { Products, Favorite } from 'src/screens/';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type HomeStackParams = {
  Product: undefined;
  Favorite: undefined;
};

const MenuTabBar = createBottomTabNavigator<HomeStackParams>();

export default function Home() {
  const { name } = useAppSelector((state) => state.auth);

  return (
    <MenuTabBar.Navigator initialRouteName="Product">
      <MenuTabBar.Screen
        options={{
          tabBarLabel: 'Produtos',
          headerTitle: `Olá, ${name}`,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
        name="Product"
        component={Products}
      />
      <MenuTabBar.Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="heart" size={size} color={color} />
          )
        }}
        name="Favorite"
        component={Favorite}
      />
    </MenuTabBar.Navigator>
  );
}
