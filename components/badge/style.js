import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    badge: {
        backgroundColor: '#145855',
        height: verticalScale(22),
        justifyContent: "center",
        borderRadius: horizontalScale(50),
    },

    text: {
        fontFamily: getFontFamily('Inter', "600"),
        fontSize: scaleFontSize(10),
        lineHeight: horizontalScale(12),
        color: "white",
        textAlign: "center",

    },

});

export default style;
