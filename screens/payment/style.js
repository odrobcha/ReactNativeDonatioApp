import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    paymentContainer: {
        marginHorizontal: horizontalScale(24),
    },
    donationAmountInfo : {
        marginTop: verticalScale(12)
    },
    button: {
        marginHorizontal: horizontalScale(24),
    },
    cardForm: {
        height: verticalScale(250),
        marginTop: verticalScale(12)
    }
});

export default style;
