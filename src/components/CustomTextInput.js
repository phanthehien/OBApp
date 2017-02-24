/**
 * Created by hien.phanthe on 2/23/17.
 */

import React  from 'react';

const PropTypes = React.PropTypes;

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,

} from 'react-native';

const styles = StyleSheet.create({
    iconWrap : {
        paddingHorizontal: 5,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 40
    },
    inputWrap: {
        flexDirection: "row",
        paddingHorizontal: 5,
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },

    input : {
        flex: 1,
        color: 'white'
    },

    icon: {
        width: 20,
        height: 20
    },
});


export default class CustomTextInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                    <Image source={this.props.imageIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <TextInput
                    {...this.props}
                    underlineColorAndroid="transparent"
                    style={styles.input}
                />
            </View>
		);
	}
}

 CustomTextInput.propTypes = {
     imageIcon: PropTypes.number.isRequired,
     // secureTextEntry: PropTypes.bool,
     // placeholderTextColor: PropTypes.string,
     // placeholder: PropTypes.string,

     //updated to the this.props to use the app.
 };