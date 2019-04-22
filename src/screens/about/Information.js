import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import AppTextBold from '../../components/AppTextBold';
import AppTextRegular from '../../components/AppTextRegular';

class InformationScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <AppTextBold style={styles.textTitle}>Info Malang Batu</AppTextBold>
                <AppTextRegular>React Native Version</AppTextRegular>
                <AppTextRegular>Version 1.0.1</AppTextRegular>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16
    },
    textTitle: {
        fontSize: 18
    }
});

export default InformationScreen;
