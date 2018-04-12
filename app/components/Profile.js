import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';


export default class Profile extends React.Component {

    render() {
        var title = AsyncStorage.getItem('username') + "s profile";
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: Expo.Constants.statusBarHeight,
        backgroundColor: '#3d99cc',
    },
    text: {
        color: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        alignItems: 'center',
        alignItems:'baseline',
        marginTop: 10,
    }
});