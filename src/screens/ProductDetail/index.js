import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {Colors} from '../../utils/colors';
import {Images} from '../../utils/images';

import styles from './style';

const SLIDER_WIDTH = Dimensions.get('window').width;

const ProductDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [activeSlide, setActiveSlide] = useState(0);
  const [cartCountTotal, setCartCountTotal] = useState(0);

  const favouriteProducts = useSelector(
    state => state.product.favouriteProducts,
  );
  const isFavourited = Boolean(
    favouriteProducts.some(fav => fav.id == route?.params?.productId),
  );
  const cartItems = useSelector(state => state.cart.cart);
  const productDetail = useSelector(state => state.product.productDetail);
  const productDetailsLoading = useSelector(
    state => state.loading.effects.product.getProductById,
  );

  useEffect(() => {
    let subT = 0;
    cartItems.map(item => {
      subT = subT + item.quantity;
    });
    setCartCountTotal(subT);
  }, [cartItems]);

  useEffect(() => {
    dispatch.product.getProductById(route?.params?.productId);
  }, []);

  const _renderItem = ({item}) => {
    return <Image source={{uri: item}} style={styles.productImage} />;
  };

  const onHeartPress = () => {
    if (isFavourited)
      dispatch.product.setRemoveFavouriteProducts(productDetail);
    else dispatch.product.setFavouriteProducts(productDetail);
  };

  const onPlusButton = () => {
    dispatch.cart.addtoCart(productDetail);
  };

  if (productDetailsLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={Colors.primaryBlue} size={'large'} />
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <AntDesign color={Colors.black} name={'left'} size={scale(15)} />
        </TouchableOpacity>
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
      <View>
        <View style={{paddingHorizontal: scale(20)}}>
          <Text style={styles.productTitle}>{productDetail.title}</Text>
          <Text style={styles.productSubTitle}>{productDetail.brand}</Text>
          <View style={styles.reviewContent}>
            <StarRating
              disabled={false}
              maxStars={5}
              fullStarColor={Colors.yellow}
              emptyStarColor={Colors.black}
              rating={productDetail?.rating}
              starSize={scale(15)}
              containerStyle={{width: scale(100)}}
              selectedStar={rating => setStarCount(rating)}
            />
            <Text style={styles.reviewText}>110 Reviews</Text>
          </View>
        </View>
        <View>
          <Carousel
            data={productDetail.images}
            renderItem={_renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={SLIDER_WIDTH}
            containerCustomStyle={styles.carouselContainer}
            activeSlideAlignment={'start'}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={productDetail.images.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
          <TouchableOpacity onPress={onHeartPress} style={styles.heartContent}>
            <AntDesign
              name={isFavourited ? 'heart' : 'hearto'}
              color={isFavourited ? Colors.heartRed : Colors.gray3}
              size={scale(20)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: scale(20),
          }}>
          <View style={styles.priceContent}>
            <Text style={styles.priceText}>{`$${productDetail?.price}`}</Text>
            <View style={styles.discountView}>
              <Text style={styles.discountText}>
                {productDetail?.discountPercentage}% Off
              </Text>
            </View>
          </View>
          <View style={styles.buttonContent}>
            <Pressable style={styles.addToCartButton} onPress={onPlusButton}>
              <Text style={styles.addToCartText}>Add To Cart</Text>
            </Pressable>
            <Pressable style={styles.buyNowButton}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
          <Text style={styles.detailText}>Details</Text>
          <Text style={styles.descriptionText}>
            {productDetail?.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
