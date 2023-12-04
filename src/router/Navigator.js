import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProductDetail from '../screens/ProductDetail';

import {Colors} from '../utils/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const More = () => {
  return (
    <View>
      <Text>More</Text>
    </View>
  );
};
const Category = () => {
  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};
const Favourite = () => {
  return (
    <View>
      <Text>Favourite</Text>
    </View>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryBlue,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Entypo name="dots-three-vertical" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryBlue,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default Navigator;
