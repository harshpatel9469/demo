import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../../utils/colors';
import styles from './style';

const Cart = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const delivery = 2.58;
  const cart = useSelector(state => state.cart.cart);

  const onMinusButton = item => {
    dispatch.cart.decreaseQtyToItem(item);
  };
  const onPlusButton = item => {
    dispatch.cart.increaseQtyToItem(item);
  };

  useEffect(() => {
    let subT = 0;
    cart.map(item => {
      subT = subT + item.price * item.quantity;
    });
    setSubTotal(subT);
  }, [cart]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <AntDesign color={Colors.black} name={'left'} size={scale(15)} />
        </TouchableOpacity>
        <Text style={styles.cartText}>Shopping Cart {`(${0})`}</Text>
      </View>
      <View style={{paddingHorizontal: scale(30), height: '50%'}}>
        <FlatList
          data={cart}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.listMainContent}
                key={index}
                onPress={() => {
                  navigation.navigate('ProductDetail', {productId: item.id});
                }}>
                <Image
                  source={{
                    uri: item.thumbnail,
                  }}
                  style={styles.productImage}
                />
                <View style={styles.productText}>
                  <Text
                    style={styles.productTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.title}
                  </Text>
                  <Text style={styles.productPriceText}>${item.price}</Text>
                </View>
                <View style={styles.countContent}>
                  <TouchableOpacity
                    onPress={() => onMinusButton(item)}
                    style={styles.buttonContent}>
                    <AntDesign
                      color={Colors.black}
                      name={'minus'}
                      size={scale(15)}
                    />
                  </TouchableOpacity>
                  <Text style={styles.countText}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => onPlusButton(item)}
                    style={styles.buttonContent}>
                    <AntDesign
                      color={Colors.black}
                      name={'plus'}
                      size={scale(15)}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.editContent}>
          <Text style={styles.editText}>Edit</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{paddingHorizontal: scale(35)}}>
          <View style={styles.totalContent}>
            <Text style={styles.totalTitle}>SubTotal</Text>
            <Text style={styles.totalValue}>${subTotal}</Text>
          </View>
          <View style={styles.totalContent}>
            <Text style={styles.totalTitle}>Delivery</Text>
            <Text style={styles.totalValue}>$35.96</Text>
          </View>
          <View style={styles.totalContent}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.totalValue}>${subTotal + delivery}</Text>
          </View>
        </View>
        <View style={styles.buttonMain}>
          <Pressable style={styles.checkoutButton}>
            <Text style={styles.buttonText}>Proceed To checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Cart;
