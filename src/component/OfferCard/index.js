import {View, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

import {Colors} from '../../utils/colors';

import styles from './style';

const OfferCard = ({activeSlide, index}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            activeSlide == index ? Colors.yellow : Colors.lightYellow,
        },
      ]}
      key={index}>
      <Feather name={'image'} size={scale(68)} color={Colors.white} />
      <View style={{marginLeft: scale(30)}}>
        <Text style={styles.firstText}>Get</Text>
        <Text style={styles.secText}>50% off</Text>
        <Text style={styles.thirdText}>On first 3 order</Text>
      </View>
    </View>
  );
};

export default OfferCard;
