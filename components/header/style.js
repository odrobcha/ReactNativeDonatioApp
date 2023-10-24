import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    title1: {
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(24),
        lineHeight: 29,
    },
    title2: {
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(18),
        lineHeight: 22,
    },
    title3: {
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: scaleFontSize(16),
        lineHeight: 18,
    }

});
export default style
