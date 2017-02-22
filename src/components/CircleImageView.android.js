/**
 * Created by hien.phanthe on 2/22/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default class CircleImageView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('src/assets/images/check_red.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image : {
        marginTop: 25,
        width: 100,
        height: 100,
        resizeMode: "contain",
    }
});