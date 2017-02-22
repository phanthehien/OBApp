/**
 * Created by hien.phanthe on 2/22/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
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
        flex: 1,
        marginTop: 50,
    },
});