
import React from 'react';
import { connect } from 'react-redux';

import { Text } from 'react-native';


export class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
                <Text>Home screen: { this.props.userInfo.full_name }</Text>
		);
	}
}

function mapStateToProps(state) {
    return {
        userInfo : state.SignInReducer.userInfo
    };
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(HomeScreen)