import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(200),
    width: '48%',
    backgroundColor: Colors.gray1,
    borderRadius: scale(20),
    marginRight: scale(10),
    marginBottom: scale(10),
  },
  productImage: {
    width: '100%',
    height: '70%',
    borderRadius: scale(20),
    resizeMode: 'contain',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  heart: {position: 'absolute', top: 10, left: 10},
  detailContent: {
    padding: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: Colors.black,
    fontSize: scale(14),
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '600',
  },
  title: {
    color: Colors.black,
    fontSize: scale(12),
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
  },
  addButton: {
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
  },
});

export default styles;
