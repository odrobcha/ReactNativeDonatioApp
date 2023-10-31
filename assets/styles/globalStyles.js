import {StyleSheet} from 'react-native';
import { verticalScale } from './scaling';

const globalStyles = StyleSheet.create({
    backgroundWhite: {
        backgroundColor: "white"
    },
    flex: {
        flex:1,
    },
    margiBottom24: {
        marginBottom: verticalScale(24)
    }
});

export default globalStyles;
