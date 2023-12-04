import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  carouselContainer: {
    marginBottom: scale(20),
  },
  header: {
    flex: 0.1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    padding: scale(20),
  },
  backButton: {
    backgroundColor: Colors.gray1,
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: scale(28),
    height: scale(28),
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  cartCount: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: Colors.yellow,
    borderRadius: scale(12),
    height: scale(23),
    width: scale(23),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(2),
    borderColor: Colors.primaryBlue,
  },
  cartCountText: {
    color: Colors.white,
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
  },
  productTitle: {
    fontSize: scale(50),
    color: Colors.black,
    fontWeight: '300',
  },
  productSubTitle: {
    fontSize: scale(50),
    color: Colors.black,
    fontWeight: '600',
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(15),
  },
  reviewText: {
    fontFamily: 'Manrope-Regular',
    fontSize: scale(14),
    fontWeight: '400',
    color: Colors.gray4,
    marginLeft: scale(10),
  },
  productImage: {
    width: '100%',
    height: scale(207),
    resizeMode: 'cover',
  },
  paginationContainer: {position: 'absolute', bottom: 0, left: -15},
  dotStyle: {
    width: scale(17),
    height: 5,
    backgroundColor: Colors.yellow,
  },
  inactiveDotStyle: {
    width: scale(17),
    height: 5,
    backgroundColor: Colors.gray3,
  },
  heartContent: {
    backgroundColor: Colors.white,
    height: scale(55),
    width: scale(55),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 14,
    right: 25,
  },
  priceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: scale(16),
    fontFamily: 'Manrope-Bold',
    color: Colors.primaryBlue,
  },
  discountView: {
    backgroundColor: Colors.primaryBlue,
    borderRadius: 20,
    paddingHorizontal: scale(10),
    paddingVertical: scale(4),
    marginLeft: scale(14),
  },
  discountText: {
    color: Colors.white,
    fontSize: scale(12),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(28),
  },
  addToCartButton: {
    height: scale(56),
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  addToCartText: {
    color: Colors.primaryBlue,
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
  },
  buyNowButton: {
    height: scale(56),
    backgroundColor: Colors.primaryBlue,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  buyNowText: {
    color: Colors.white,
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
  },
  detailText: {
    color: Colors.gray2,
    fontSize: scale(16),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  descriptionText: {
    color: Colors.gray,
    fontSize: scale(16),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
});

export default styles;
