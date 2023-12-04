import React from 'react';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';

import {Colors} from '../../utils/colors';

import styles from './style';

const ProductCard = ({
  item,
  index,
  isFavourited,
  onHeartPress,
  onPlusButton,
  onFavoutireHeartPress,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      key={index}
      onPress={() => {
        navigation.navigate('ProductDeatail', {productId: item.id});
      }}>
      <Image source={{uri: item.thumbnail}} style={styles.productImage} />
      <TouchableOpacity
        style={styles.heart}
        onPress={isFavourited ? onFavoutireHeartPress : onHeartPress}>
        <AntDesign
          name={isFavourited ? 'heart' : 'hearto'}
          color={isFavourited ? Colors.heartRed : Colors.gray3}
          size={scale(15)}
        />
      </TouchableOpacity>
      <View style={styles.detailContent}>
        <View style={{width: '80%'}}>
          <Text style={styles.priceText}>{'$' + item.price}</Text>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onPlusButton}>
          <AntDesign name={'plus'} color={Colors.white} size={scale(12)} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ProductCard;
