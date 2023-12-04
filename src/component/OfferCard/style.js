import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {Colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(123),
    width: scale(250),
    borderRadius: scale(16),
    padding: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(18),
  },
  firstText: {
    fontSize: scale(20),
    fontFamily: 'Manrope-Regular',
    fontWeight: '300',
    color: Colors.white,
  },
  secText: {
    fontSize: scale(26),
    fontFamily: 'Manrope-Regular',
    fontWeight: '800',
    color: Colors.white,
  },
  thirdText: {
    fontSize: scale(13),
    fontFamily: 'Manrope-Regular',
    fontWeight: '300',
    color: Colors.white,
  },
});

export default styles;
