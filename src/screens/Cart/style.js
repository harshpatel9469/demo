import {scale} from 'react-native-size-matters';
import {StyleSheet, Dimensions} from 'react-native';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: '10%',
    backgroundColor: Colors.white,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  backButton: {
    backgroundColor: Colors.gray1,
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: scale(16),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    color: Colors.gray2,
    marginLeft: scale(20),
  },
  listMainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3,
    paddingBottom: scale(20),
    marginBottom: scale(15),
  },
  productImage: {
    width: scale(35),
    height: scale(35),
    resizeMode: 'cover',
    borderRadius: scale(5),
  },
  productText: {width: '45%', marginLeft: scale(26)},
  productTitle: {
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '500',
    color: Colors.gray2,
    width: '90%',
  },
  productPriceText: {
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    color: Colors.gray2,
  },
  countContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%',
  },
  buttonContent: {
    backgroundColor: Colors.gray1,
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    color: Colors.gray2,
  },
  editContent: {justifyContent: 'center', alignItems: 'flex-end'},
  editText: {
    fontSize: scale(12),
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
    color: Colors.primaryBlue,
  },
  footer: {
    marginHorizontal: scale(8),
    height: '40%',
    marginTop: scale(50),
    backgroundColor: Colors.gray3,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    paddingTop: scale(17),
  },
  totalContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(13),
  },
  totalTitle: {
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    color: Colors.gray2,
  },
  totalValue: {
    fontSize: scale(14),
    fontFamily: 'Manrope-Medium',
    fontWeight: '500',
    color: Colors.gray2,
  },
  buttonMain: {
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(30),
  },
  checkoutButton: {
    height: scale(56),
    backgroundColor: Colors.primaryBlue,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  buttonText: {
    color: Colors.white,
    fontSize: scale(14),
    fontFamily: 'Manrope-Regular',
    fontWeight: '600',
  },
});

export default styles;
