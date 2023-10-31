import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    header: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    headerIntroText: {
        fontFamily: getFontFamily('Inter', "400"),
        lineHeight: scaleFontSize(19),
        fontSize: 16,
        color: "#636776"
    },
    userName: {
        marginTop: verticalScale(5),
    },
    profileImage: {
        width: horizontalScale(50),
        height : horizontalScale(50)

    },
    searchBox:{
        marginHorizontal: horizontalScale(24),
        marginTop: verticalScale(20)
    },
    highlightedImageContainer:{
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),

    },
    highlightedImage: {
        width: '100%',
        height: verticalScale(160)
    },
    categories: {
        marginLeft: horizontalScale(24)
    },
    categoryItem: {

    },
    categoryHeader:{
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(16),
        marginTop: verticalScale(6)
    },
    donationItemsContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    singleDonationItem: {
        maxWidth: '49%',
        marginBottom: verticalScale(23)
    }
});

export default style;
