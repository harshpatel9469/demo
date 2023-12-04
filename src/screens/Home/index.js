import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Images} from '../../utils/images';
import {Colors} from '../../utils/colors';
import OfferCard from '../../component/OfferCard';
import ProductCard from '../../component/ProductCard';

import styles from './style';

const SLIDER_WIDTH = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const [cartCountTotal, setCartCountTotal] = useState(0);

  const cartItems = useSelector(state => state.cart.cart);
  const productList = useSelector(state => state.product.productList);
  const favouriteProducts = useSelector(
    state => state.product.favouriteProducts,
  );
  const productListLoading = useSelector(
    state => state.loading.effects.product.getProductsList,
  );

  useEffect(() => {
    let subT = 0;
    cartItems.map(item => {
      subT = subT + item.quantity;
    });
    setCartCountTotal(subT);
  }, [cartItems]);

  useEffect(() => {
    dispatch.product.getProductsList();
  }, []);

  const onHeartPress = item => {
    dispatch.product.setFavouriteProducts(item);
  };
  const onPlusButton = item => {
    dispatch.cart.addtoCart(item);
  };

  const onFavoutireHeartPress = item => {
    dispatch.product.setRemoveFavouriteProducts(item);
  };

  if (productListLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={Colors.primaryBlue} size={'large'} />
      </View>
    );
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryBlue} />
      <View style={styles.header}>
        <View style={styles.headerTextContent}>
          <Text style={styles.headerText}>Hey Rahul</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image source={Images.bag} style={styles.cartImage} />
            {cartCountTotal ? (
              <View style={styles.cartCount}>
                <Text style={styles.cartCountText}>{cartCountTotal}</Text>
              </View>
            ) : null}
          </Pressable>
        </View>
        <View style={styles.searchContainer}>
          <AntDesign name={'search1'} color={Colors.white} size={scale(16)} />
          <TextInput
            placeholder="Search Product or store"
            placeholderTextColor={Colors.gray}
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.dropDownContainer}>
          <View>
            <Text style={styles.DropDownText}>Delivery To</Text>
            <Text style={styles.DropDownValue}>Green Way 3000, Sylhet</Text>
          </View>
          <View>
            <Text style={styles.DropDownText}>WHITHIN</Text>
            <Text style={styles.DropDownValue}>1 Hour</Text>
          </View>
        </View>
      </View>

      <View style={styles.offerContent}>
        <View>
          <Carousel
            data={[0, 1]}
            renderItem={({item, index}) => {
              return <OfferCard activeSlide={activeSlide} index={index} />;
            }}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={Math.round(SLIDER_WIDTH * 0.73)}
            containerCustomStyle={styles.carouselContainer}
            activeSlideAlignment={'start'}
            onSnapToItem={index => setActiveSlide(index)}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
          />
        </View>
        <Text style={styles.recommendedText}>Recommended</Text>
        <FlatList
          data={productList}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <ProductCard
                item={item}
                index={index}
                isFavourited={Boolean(
                  favouriteProducts.some(fav => fav.id == item.id),
                )}
                onFavoutireHeartPress={() => onFavoutireHeartPress(item)}
                onHeartPress={() => onHeartPress(item)}
                onPlusButton={() => onPlusButton(item)}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
