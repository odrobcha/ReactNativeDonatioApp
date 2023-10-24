import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    button: {
        backgroundColor: '#2979F2',
        height: verticalScale(55),
        justifyContent: "center",
        borderRadius: horizontalScale(50),
    },
    disabled:{
        opacity: 0.5,
    },
    text: {
        fontFamily: getFontFamily('Inter', "500"),
        fontSize: scaleFontSize(16),
        lineHeight: horizontalScale(19),
        color: "white",
        textAlign: "center",

    },
});

export default style;
