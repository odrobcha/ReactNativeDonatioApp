import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    container: {
        marginHorizontal: horizontalScale(24),
        flex: 1,
        justifyContent: 'center',
    },
    backButton: {
        marginLeft: horizontalScale(14),
        marginTop: verticalScale(7),
    },
    error: {
        fontFamily: getFontFamily("Inter", '400'),
        fontSize: scaleFontSize(16),
        color: "red",
        marginBottom: verticalScale(20)
    },
    success: {
        fontFamily: getFontFamily("Inter", '400'),
        fontSize: scaleFontSize(16),
        color: "green",
        marginBottom: verticalScale(20)
    }


});

export default style;
