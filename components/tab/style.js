import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    tab: {
        backgroundColor: '#2979F2',
        height: verticalScale(50),
        justifyContent: "center",
        borderRadius: horizontalScale(50),
    },
    isInactiveTab:{
        backgroundColor: '#F3F5F9'
    },
    text: {
        fontFamily: getFontFamily('Inter', "500"),
        fontSize: scaleFontSize(14),
        lineHeight: horizontalScale(17),
        color: "white",
        textAlign: "center",

    },
    isInactiveTitle:{
        color: '#79869F'
    }
});

export default style;
