import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppTextBold from '../../components/AppTextBold';
import AppTextRegular from '../../components/AppTextRegular';

class DetailListPlaceScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            place: this.props.navigation.state.params.selectedPlace
        }
    }

    render () {
        return (
            <View>
                <Image source={{uri:this.state.place.gambar}} style={styles.containerImage} />
                <AppTextBold style={styles.textName}>{this.state.place.nama}</AppTextBold>
                <AppTextRegular style={styles.textDescription}>{this.state.place.deskripsi}</AppTextRegular>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerImage: {
        width: "100%",
        height: 250
    },
    textName: {
        fontSize: 22,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    },
    textDescription: {
        fontSize: 18,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    }
});

export default DetailListPlaceScreen;
