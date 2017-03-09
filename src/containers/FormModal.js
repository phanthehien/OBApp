/**
 * Created by hien.phanthe on 3/9/17.
 */
import React from 'react';

import toolbarStyle from '../styles/toolbarStyle'
import {Text, View, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class FormModal extends React.Component {
    constructor (props) {
        super(props);
    }

    _pressClose() {
        Actions.pop()
    }

    componentWillUnmount () {
        // this.props.updateDisplayValue();
    }

    render () {

        return (<View style={{ flex:  1, 'flex-direction' : 'column' }}>
            <View style={ toolbarStyle.toolbar }>
                <TouchableHighlight>
                    <Text style={ toolbarStyle.toolbarButton}> = </Text>
                </TouchableHighlight>
                <Text style={ toolbarStyle.toolbarTitle}> Onboarding</Text>
                <TouchableHighlight onPress={ this._pressClose }>
                    <Text style={ toolbarStyle.toolbarButton}> Close</Text>
                </TouchableHighlight>
            </View>
            { this.props.renderScene() }
        </View>)


    }
}

FormModal.propTypes = {
    renderScene: React.PropTypes.func,
    updateDisplayValue: React.PropTypes.func
};