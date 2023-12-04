import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  carouselContainer: {
    marginVertical: scale(15),
  },
  header: {
    height: scale(180),
    backgroundColor: Colors.primaryBlue,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(20),
  },
  headerTextContent: {
    paddingVertical: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: scale(20),
    color: Colors.white,
    fontFamily: 'Manrope',
    fontWeight: '600',
  },
  cartImage: {
    width: scale(28),
    height: scale(28),
    resizeMode: 'contain',
  },
  cartCount: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: Colors.yellow,
    borderRadius: scale(12),
    height: scale(25),
    width: scale(25),
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
  searchContainer: {
    height: scale(50),
    backgroundColor: Colors.primaryBlue1,
    width: '100%',
    borderRadius: scale(25),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(24),
  },
  searchInput: {width: '100%', paddingLeft: scale(12)},
  dropDownContainer: {
    width: '100%',
    paddingTop: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DropDownText: {
    color: Colors.gray1,
    fontFamily: 'Manrope-Regular',
    fontWeight: '800',
    fontSize: scale(10),
    opacity: 0.5,
  },
  DropDownValue: {
    color: Colors.white,
    fontFamily: 'Manrope-Regular',
    fontWeight: '800',
    fontSize: scale(12),
  },
  offerContent: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: scale(20),
    flex: 0.75,
  },
  recommendedText: {
    fontSize: scale(28),
    fontWeight: '400',
    fontFamily: 'Manrope',
    color: Colors.gray2,
    paddingBottom: scale(10),
  },
});

export default styles;
