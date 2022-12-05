import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';
import { THEME_COLOR } from "../data/colors";
import SizedBox from "./sized-box";

interface TILibrary {
    name: string;
    link: string;
    license: string;
}

export default function ItemLibrary({name, link, license}: TILibrary) {
    return <View style={styles.container}>
        <Text style={styles.textName}>{ name }</Text>
        <Text style={styles.textLink}>{ link }</Text>
        <Text style={styles.textLicense}>{ license }</Text>
        <SizedBox height={8} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    textLink: {
        fontSize: 14,
        color: THEME_COLOR,
    },
    textLicense: {
        fontSize: 12,
        color: '#757575',
    },
});