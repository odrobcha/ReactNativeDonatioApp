import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    label: {
        fontFamily: getFontFamily('Inter', "400"),
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(15),
        color: "#36455A"
    },
    input:{
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderColor: 'rgba(167, 167, 167, 0.5)'
    }

});

export default style;
