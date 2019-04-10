import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

import { THEME_COLOR } from '../../data/Constants';

class AboutScreen extends React.Component {

    renderTab() {
         return (
             <PagerTitleIndicator
                style={styles.indicatorContainer}
                trackScroll={true}
                itemTextStyle={styles.indicatorText}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['Information', 'Changelog','Thanks','Libraries']}
             />
         )
   }

    render () {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={styles.viewPagerContainer}
                    initialPage={0}
                    indicator={this.renderTab()}>

                        <View>
                            <Text>page one</Text>
                        </View>
                        <View>
                            <Text>page two</Text>
                        </View>
                        <View>
                            <Text>page three</Text>
                        </View>
                        <View>
                            <Text>page four</Text>
                        </View>

                </IndicatorViewPager>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewPagerContainer: {
        flex:1,
        flexDirection: 'column-reverse',
    },
    indicatorContainer: {
        backgroundColor: THEME_COLOR
    },
    indicatorText: {
        fontSize: 14,
        color: 0xFFFFFF99
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: 0xFFFFFFFF
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'white'
    }
})

export default AboutScreen;
