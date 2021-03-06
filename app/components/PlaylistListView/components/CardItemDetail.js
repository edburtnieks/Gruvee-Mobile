import React, { memo } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as StyleConstants from 'Gruvee/config/styles'

const CardItemDetail = ({ name, numMembers, numSongs }) => {
    const membersLabel = numMembers > 1 ? 'Members' : 'Member'
    return (
        <View style={styles.Container}>
            <Text style={styles.TextHeader}>{name}</Text>
            <Text style={styles.TextDetail}>
                {numMembers} {membersLabel}
            </Text>
            <Text style={styles.TextDetail}>{numSongs} Songs</Text>
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    Container: {
        width: '60%',
        marginTop: 15,
        marginLeft: 15,
        backgroundColor: StyleConstants.BASE_BACKGROUND_COLOR,
        opacity: 0.8,
        borderRadius: StyleConstants.BASE_BORDER_RADIUS,
    },
    TextHeader: {
        fontSize: StyleConstants.CARD_ITEM_TITLE_SIZE_iOS,
        fontWeight: StyleConstants.SEMIBOLD_WEIGHT,
        color: StyleConstants.CARD_ITEM_DETAIL_FONT_COLOR,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    TextDetail: {
        fontSize: StyleConstants.CARD_ITEM_DETAIL_SIZE_iOS,
        color: StyleConstants.CARD_ITEM_DETAIL_FONT_COLOR,
        paddingBottom: 5,
        paddingLeft: 5,
    },
})

export default memo(CardItemDetail)
